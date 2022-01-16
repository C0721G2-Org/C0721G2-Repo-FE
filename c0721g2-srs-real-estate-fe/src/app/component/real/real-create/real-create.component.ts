import {Component, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Direction} from '../../../model/real/direction';
import {RealEstateType} from '../../../model/real/real-estate-type';
import {Observable, Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealService} from '../../../service/real.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {RealEstateNew} from '../../../model/real/real-estate-new';



@Component({
  selector: 'app-real-create',
  templateUrl: './real-create.component.html',
  styleUrls: ['./real-create.component.scss']
})
export class RealCreateComponent implements OnInit{

  directions: Direction[];
  realTypes: RealEstateType[];
  private subscription: Subscription | undefined;

  selectFiles: FileList;
  files: File[];
  urls = new Array<string>();
  uploadUrls = new Array<string>();
  imgMess: string;
  imgdetect = false;

  news: RealEstateNew;

  notifies: Observable<any>[];

  form: FormGroup = this.formBuilder.group(
    {
      id: [],
      approval: [],
      customer: [{id: 'KH-0003'}],
      description: ['', Validators.maxLength(256)],
      title: ['', [Validators.required, Validators.maxLength(256)]],
      address: ['', [Validators.required, Validators.maxLength(256)]],
      area: ['', [Validators.required, Validators.min(1), Validators.max(99999)]],
      price: ['', [Validators.required, Validators.min(1), Validators.max(1999999999)]],
      kindOfNews: [1],
      direction: [null],
      status: [null],
      realEstateType: [1],
      imageList: []
    }
  );



  constructor(private formBuilder: FormBuilder, private realService: RealService,
              private db: AngularFireStorage, private notify: AngularFireDatabase) {
    const items: AngularFireList<any> = notify.list('/notifies');
    items.valueChanges().subscribe(
      x => {this.notifies = x;
            console.log(x); }
    );


    this.subscription = this.realService.getAllDirection().subscribe(
      data => {
        this.directions = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
    this.subscription = this.realService.getAllRealEstateType().subscribe(
      data => {
        this.realTypes = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

  send(mess: string) {
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    this.notify.list<any>('/notifies').push({mess, time, date});
  }

  delete(item){
    console.log(123);
    console.log(item);
    const db = this.notify.database.ref();
    const query = this.notify.database.ref('/notifies').orderByKey();
    query.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const pkey = childSnapshot.key;
          const chVal = childSnapshot.val();
          console.log(chVal);
          if (chVal.date === item.date && chVal.mess === item.mess && chVal.time === item.time){
            db.child('notifies/' + pkey).remove();
            return true;
          }
        });
      });
  }

  detectFiles(event) {
    this.imgdetect = true;
    this.imgMess = null;
    // console.log(event.target.files);
    if (this.urls.length !== 0) {
      this.urls = new Array<string>();
    }
    if (event.target.files.length > 5) {
      this.imgMess = 'Chỉ được chọn tối đa 5 ảnh';
      this.imgdetect = false;
      return;
    } else if (event.target.files.length === 0) {
      this.imgMess = 'Chọn tối thiểu 1 ảnh';
      this.imgdetect = false;
      return;
    } else {
      const files = event.target.files;
      this.selectFiles = files;
      if (files) {
        for (const file of files) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
        // console.log(this.urls);
      }
    }
  }

  onSubmit() {
    console.log(this.selectFiles);
    if (this.form.valid) {
      console.log('ok');

      for (let i = 0; i < this.selectFiles.length; i++) {
        this.upload(i);
      }
      this.form.value.imageList = this.uploadUrls;
      console.log(this.form.value);
      this.news = this.form.value;
      console.log(this.news);

      this.send(this.form.value.title)

      const templates = [JSON.stringify(this.news)];
      console.log(templates);

      this.realService.save(this.news);
    } else {
      console.log('not');
      console.log(this.form);
      console.log(this.findInvalidControls());
    }
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

  upload(index: number): any {
    const urlPath = this.selectFiles.item(index).name + new Date().getTime();
    const fileRef = this.db.ref(urlPath);
    this.db.upload(urlPath, this.selectFiles.item(index)).snapshotChanges().pipe(
      finalize(
        () => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.uploadUrls.push(url);
          });
        }
      )
    ).subscribe();
  }
}
