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
  page = 0;
  pageIndex: number;
  size = 0;
  flag = false;

  priceRangeList = [
    // {id: 0, minPrice: '0', maxPrice: '20000000000000000000000000', name: 'Chọn giá'},
    {id: 1, minPrice: '0', maxPrice: '100000000', name: '0-100 triệu'},
    {id: 2, minPrice: '100000000', maxPrice: '500000000', name: '100-500 triệu'},
    {id: 3, minPrice: '500000000', maxPrice: '1000000000', name: '500triệu - 1 tỷ'},
    {id: 4, minPrice: '1000000000', maxPrice: '5000000000', name: '1-5 tỷ'},
    {id: 5, minPrice: '5000000000', maxPrice: '10000000000', name: '5 - 10 tỷ'},
    {id: 6, minPrice: '10000000000', maxPrice: '20000000000000', name: '10 - 20 tỷ'},
    {id: 7, minPrice: '20000000000', maxPrice: '10000000000000000000000', name: '20 tỷ +'}]
  ;

  constructor(
    private _formBuilder: FormBuilder,
    public realService: RealService,
    public activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit()
    :
    void {
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
    this.formSearch = new FormGroup({
      address: new FormControl(''),
      realEstateType: new FormControl(''),
      direction: new FormControl(''),
      priceRange: new FormControl(''),
      minPrice: new FormControl(''),
      maxPrice: new FormControl(''),
    });
    this.realService.getAllRealEstates().subscribe(data => {
        this.mess = '';
        this.realEstateNews = data.content;
        console.log(this.realEstateNews);
      }
    );
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.mess = paramMap.get('mess');
    });
  }

  onSearch(searchInfo) {

    console.log(this.formSearch.value.realEstateType);
    console.log(this.formSearch.value.direction);
    console.log(this.formSearch.value.priceRange);
    console.log(this.formSearch.value.priceRange.minPrice);
    console.log(this.formSearch.value.priceRange.maxPrice);
    // console.log('minprice:' +this.minPrice);
    // nếu dùng newform thì this.formSearch.Adress
    this.realService.getAllRealEstatesByAdress(
      this.formSearch.value.address,
      this.formSearch.value.realEstateType.id,
      this.formSearch.value.direction.id,
      this.formSearch.value.priceRange.minPrice,
      this.formSearch.value.priceRange.maxPrice,
      this.formSearch.value.pageIndex
    )
      .subscribe(data => {
          if (data !== null) {
            this.mess = '';
            this.realEstateNews = data.content;
            console.log(this.realEstateNews);
          } else {
            this.mess = 'Nội dung bạn tìm không có';
            console.log(this.mess);
          }
        }
      );
  }


  showMore() {
    this.pageIndex = this.page + 1;
  }
}
