import { Component, OnInit } from '@angular/core';
import {RealEstateNew} from "../../../model/real-estate-new/real-estate-new";
import {RealService} from "../../../service/real.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-real-list',
  templateUrl: './real-list.component.html',
  styleUrls: ['./real-list.component.scss']
})
export class RealListComponent implements OnInit {
  public realEstateNews: RealEstateNew[];
  term: string;
  p: any;
  mess: string;

  constructor(
    public  realService: RealService,
    public activatedRoute: ActivatedRoute,

  ) {
  }

  ngOnInit(): void {
    this.realService.getAllRealEstates().subscribe(data => {
        this.realEstateNews = data.content;
        console.log(this.realEstateNews);
      }
    );
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.mess = paramMap.get('mess');
    });
  }

}
