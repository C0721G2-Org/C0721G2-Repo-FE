import {Component, OnInit} from '@angular/core';
import {RealService} from '../../../service/real.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RealEstateNew} from '../../../model/real/real-estate-new';
import {Subscription} from 'rxjs';
import {Image} from '../../../model/image/image';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-real-detail',
  templateUrl: './real-detail.component.html',
  styleUrls: ['./real-detail.component.scss']
})
export class RealDetailComponent implements OnInit {

  constructor(private realService: RealService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }

  realEstate: RealEstateNew;
  id: string;
  url: string;
  img: Image;
  imgList: Image[];
  private subscription: Subscription;

  // previous(index: number) {
  //   if (index > 0) {
  //     this.url = this.realEstate.imageList[index - 1].url;
  //   } else if (index === 0) {
  //     this.url = this.realEstate.imageList[this.realEstate.imageList.length - 1].url;
  //   }
  // }
  //
  // next(index: number) {
  //   if (index < this.realEstate.imageList.length - 1) {
  //     this.url = this.realEstate.imageList[index + 1].url;
  //   } else if (index === this.realEstate.imageList.length - 1) {
  //     this.url = this.realEstate.imageList[0].url;
  //   }
  // }
  searchFom = new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      console.log(this.id);
      this.subscription = this.realService.findRealEstateNewById(this.id).subscribe(data => {
          this.realEstate = data;
          this.img = this.realEstate.imageList.shift();
          this.imgList = this.realEstate.imageList;
          console.log(this.realEstate);
          console.log(this.imgList);
          console.log(this.img);
          // console.log(this.questions[2].customer_type.name);
        }
        , error => {
          console.log(this.realEstate);
        });
    });
  }

  onSearchSubmit() {

  }
}
