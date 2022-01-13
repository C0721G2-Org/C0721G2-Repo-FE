import {Component, OnInit} from '@angular/core';
import {Direction} from '../../../model/real/direction';
import {RealEstateType} from '../../../model/real/real-estate-type';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealService} from '../../../service/real.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-real-create',
  templateUrl: './real-create.component.html',
  styleUrls: ['./real-create.component.scss']
})
export class RealCreateComponent implements OnInit {

  directions: Direction[];
  realTypes: RealEstateType[];
  private subscription: Subscription | undefined;

  selectFiles: FileList;
  files: File[];
  urls = new Array<string>();
  uploadUrls = new Array<string>();

  form: FormGroup = this.formBuilder.group(
    {
      id: [],
      approval: [],
      customer: [{id: 'KH-0003'}],
      description: [],
      title: ['', [Validators.required]],
      address: ['', [Validators.required]],
      area: ['', [Validators.required]],
      price: ['', [Validators.required]],
      kindOfNew: [1],
      direction: [null, [Validators.required]],
      status: [null, [Validators.required]],
      realEstateType: [1],
      listImage: [],
    }
  );


  constructor(private formBuilder: FormBuilder, private realService: RealService, private router: Router) {
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

  detectFiles(event) {
    if (this.urls.length !== 0) {
      this.urls = new Array<string>();
    }
    if (event.target.files.length > 5) {
      alert('select only 5 file at a time...');
      return;
    } else {
      const files = event.target.files;
      this.selectFiles = files;
      if (files) {
        for (const file of files) {
          console.log(file);
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
        console.log(this.urls);
      }
    }
  }

  onSubmit() {
    console.log(this.selectFiles);
    if (this.form.valid) {
      console.log('ok');
      console.log(this.form.value);
      this.realService.save(this.form.value).subscribe(
        data => {
          console.log(data);
          // this.router.navigateByUrl('');
        }, error => {
          console.log(error);
        }
      );
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

  // onSubmit() {
  //   console.log(this.selectFiles);
  //   for (let i = 0; i < this.selectFiles.length; i++) {
  //     this.upload(i);
  //   }
  //   console.log(this.uploadUrls);
  //   this.form.value.imgUrls = this.uploadUrls;
  //   console.log(this.form);
  // }
  //
  // upload(index: number): any {
  //   const urlPath = this.selectFiles.item(index).name + new Date().getTime();
  //   const fileRef = this.db.ref(urlPath);
  //   this.db.upload(urlPath, this.selectFiles.item(index)).snapshotChanges().pipe(
  //     finalize(
  //       () => {
  //         fileRef.getDownloadURL().subscribe((url) => {
  //           this.uploadUrls.push(url);
  //         });
  //       }
  //     )
  //   ).subscribe();
  // }
}
