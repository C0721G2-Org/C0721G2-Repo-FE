import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RealService} from '../../../service/real.service';
import {RealEstateNew} from '../../../model/real-estate-new/real-estate-new';

@Component({
  selector: 'app-post-detail-of-customer',
  templateUrl: './post-detail-of-customer.component.html',
  styleUrls: ['./post-detail-of-customer.component.scss']
})
export class PostDetailOfCustomerComponent implements OnInit {

  realEstate: RealEstateNew;
  id: number;

  constructor(private realService: RealService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      // @ts-ignore
      this.subscription = this.realService.findRealEstateNewById(this.id).subscribe(data => {
        this.realEstate = data;
        console.log(this.realEstate);
      });
    });
  }

}
