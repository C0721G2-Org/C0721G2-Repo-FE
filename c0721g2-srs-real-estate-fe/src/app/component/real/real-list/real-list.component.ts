import {Component, OnInit} from '@angular/core';
import {RealEstateNew} from '../../../model/real-estate-new/real-estate-new';
import {RealService} from '../../../service/real.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {RealEstateType} from '../../../model/real-estate-new/real-estate-type';
import {Direction} from '../../../model/real-estate-new/direction';


@Component({
  selector: 'app-real-list',
  templateUrl: './real-list.component.html',
  styleUrls: ['./real-list.component.scss']
})
export class RealListComponent implements OnInit {
  public realEstateNews: RealEstateNew[];
  mess: string;
  formSearch: FormGroup;
  public realEstateTypeList: RealEstateType[];
  directionList: Direction[];
  minPrice: string;
  maxPrice: string;

  constructor(
    private _formBuilder: FormBuilder,
    public  realService: RealService,
    public activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.realService.getAllRealEstateTypes().subscribe(data => {
        this.realEstateTypeList = data;
        console.log(this.realEstateTypeList);
      }
    );
    this.realService.getAllDirections().subscribe(data => {
        this.directionList = data;
        console.log(this.directionList);
      }
    );
    this.formSearch = this._formBuilder.group({
      address: [''],
      realEstateType: [''],
      direction: [''],
      minPrice: [''],
      maxPrice: [''],
    });
    this.realService.getAllRealEstates().subscribe(data => {
        this.realEstateNews = data.content;
        console.log(this.realEstateNews);
      }
    );
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.mess = paramMap.get('mess');
    });
  }

  onSearch(searchInfo) {
    console.log(this.formSearch.value.realEstateType.id);
    console.log(this.formSearch.value.direction.id);
    // nếu dùng newform thì this.formSearch.Adress
    this.realService.getAllRealEstatesByAdress(
      this.formSearch.value.address,
      this.formSearch.value.realEstateType.id,
      this.formSearch.value.direction.id)
      .subscribe(data => {
          this.realEstateNews = data.content;
          console.log(this.realEstateNews);
        }
      );
  }
}
