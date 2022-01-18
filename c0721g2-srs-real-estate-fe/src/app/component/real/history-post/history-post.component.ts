import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RealService} from '../../../service/real.service';
import {Subscription} from 'rxjs';
import {RealEstateNew} from '../../../model/real/real-estate-new';

@Component({
  selector: 'app-history-post',
  templateUrl: './history-post.component.html',
  styleUrls: ['./history-post.component.scss']
})
export class HistoryPostComponent implements OnInit {
  private subscription: Subscription;
  realEstateNews: RealEstateNew[];
  customerId: string;
  totalPages: number;
  pageNumber: number;
  size = 0;
  page = 0;
  flag = true;

  constructor(
    // tslint:disable-next-line:variable-name
    private formBuilder: FormBuilder,
    public  realService: RealService,
    public activatedRoute: ActivatedRoute,
  ) {
  }

  formSearch = this.formBuilder.group({
    title: [''],
    kindOfNew: [''],
    realNewType: [''],
  });

  ngOnInit(): void {
    if (this.formSearch.value.title === '' && this.formSearch.value.kindOfNew === '' &&
      this.formSearch.value.realNewType === '') {
      this.showAllList();
    } else {
      this.onSearch();
    }
  }

  showAllList() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.customerId = paramMap.get('id');
      console.log(this.customerId);
      console.log(this.page);
      this.subscription = this.realService.findHistoryPostBySearchFieldId(
        this.page, this.customerId, '', '', ''
      ).subscribe(data => {
        console.log(data);
        if (data != null) {
          this.realEstateNews = data['content'];
          this.totalPages = data['totalPages'];
          this.size = data['size'];
          this.pageNumber = data['pageable'].pageNumber;
          console.log(this.pageNumber);
          console.log(this.page);
        } else {
          this.realEstateNews = null;
        }
      });
    });
  }

  onSearch() {
    this.reset()
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.customerId = paramMap.get('id');
      console.log(this.customerId);
      console.log(this.page);
      this.subscription = this.realService.findHistoryPostBySearchFieldId(
        this.page,
        this.customerId,
        this.formSearch.value.title,
        this.formSearch.value.kindOfNew,
        this.formSearch.value.realNewType).subscribe(data => {
        console.log(data);
        if (data != null) {
          this.realEstateNews = data['content'];
          this.totalPages = data['totalPages'];
          this.size = data['size'];
          this.pageNumber = data['pageable'].pageNumber;
          console.log(this.pageNumber);
        } else {
          this.realEstateNews = null;
        }
      });
    });
  }

  showAll() {
    this.page = 0;
    this.formSearch.value.title = '';
    this.formSearch.value.kindOfNew = '';
    this.formSearch.value.realNewType = '';
    this.ngOnInit();
  }

  reset() {
    if (this.flag) {
      this.page = 0;
      this.flag = false;
    }
  }
  previousClick(index) {
    if (this.page > 0) {
      this.pageNumber = this.pageNumber - index;
      this.page = this.page - 1;
      this.ngOnInit();
    }
  }

  nextClick(index) {
    if (this.page < this.totalPages) {
      this.pageNumber = this.pageNumber + index;
      this.page = this.page + 1;
    }
    this.ngOnInit();
  }
}
