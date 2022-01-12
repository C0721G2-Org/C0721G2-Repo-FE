import {Component, OnInit} from '@angular/core';
import {RealEstateNew} from "../../../model/real-estate-new/real-estate-new";
import {RealService} from "../../../service/real.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {RealEstateType} from "../../../model/real-estate-new/real-estate-type";


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
  formSearch: FormGroup;

  public realEstateTypes: RealEstateType[];

  // C2: dung new formGroup
  // formSearch = new FormGroup({
  //   address : new FormControl()
  // });
  // get Address()
  // {
  //   return this.formSearch.get('address');
  // }

  constructor(
    private _formBuilder: FormBuilder,
    public  realService: RealService,
    public activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.realService.getAllRealEstateTypes().subscribe(data => {
        this.realEstateTypes = data.content;
        console.log(this.realEstateTypes);
      }
    );
    this.formSearch = this._formBuilder.group({
      address: [''],
    });
    this.realService.getAllRealEstates().subscribe(data => {
        this.realEstateNews = data.content;
        console.log(this.realEstateNews);
      }
    );
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.mess = paramMap.get('mess');
    });
    // C2:
    // this.formSearch = this._formBuilder.group({
    //   address: [''],
    // });
  }

  onSearch(searchInfo) {
    // nếu dùng newform thì this.formSearch.Adress
    this.realService.getAllRealEstatesByAdress(this.formSearch.value.address).subscribe(data => {
        this.realEstateNews = data.content;
        console.log(this.realEstateNews);
      }
    );
  }
}
