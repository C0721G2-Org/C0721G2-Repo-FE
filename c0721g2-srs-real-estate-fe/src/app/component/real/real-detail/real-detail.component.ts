import { Component, OnInit } from '@angular/core';
import {RealEstateNew} from '../../../model/real-estate-new/real-estate-new';
import {RealService} from '../../../service/real.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-real-detail',
  templateUrl: './real-detail.component.html',
  styleUrls: ['./real-detail.component.scss']
})
export class RealDetailComponent implements OnInit {

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
