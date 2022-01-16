import {Component, OnInit} from '@angular/core';
import {RealEstateNew} from '../../../model/real/real-estate-new';
import {RealService} from '../../../service/real.service';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-post-approval',
  templateUrl: './list-post-approval.component.html',
  styleUrls: ['./list-post-approval.component.scss']
})
export class ListPostApprovalComponent implements OnInit {
  realEstateNews: RealEstateNew[];
  realForm: FormGroup;

  private subscription: Subscription | undefined;

  page = 0;
  kindOfNews = '';
  direction = '';
  realEstateType = '';
  totalPages: number;
  pageNumber: number;
  size = 0;
  flag = false;
  message: string;



  kindOfNewsList = [{id: 1, name: 'Bán'}, {id: 2, name: 'Cho thuê'}];

  directionList = [{id: 1, name: 'Đông'}, {id: 2, name: 'Đông Nam'}, {id: 3, name: 'Đông Bắc'},
    {id: 4, name: 'Tây'}, {id: 5, name: 'Tây Nam'}, {id: 6, name: 'Tây Bắc'}, {id: 7, name: 'Nam'}, {
      id: 8, name: 'Bắc'
    }];

  realEstateTypeList = [{id: 1, name: 'Đất'}, {id: 2, name: 'Nhà ở'}];

  constructor(private realService: RealService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    if (this.kindOfNews === '' && this.direction === '' && this.realEstateType === '') {
      this.flag = false;
      this.realService.search(this.page, this.kindOfNews, this.direction, this.realEstateType).subscribe(data => {
        console.log(data);
        if (data !== null) {
          this.realEstateNews = data.content;
          this.totalPages = data.totalPages;
          this.pageNumber = data.pageable.pageNumber;
          this.size = data.size;
          this.page = data.pageable.pageNumber;
          this.message = '';
        } else {
          this.message = 'Not found !!!';
        }
      });
    } else {
      if (this.flag === false) {
        this.page = 0;
        this.realService.search(this.page, this.kindOfNews, this.direction, this.realEstateType).subscribe(data => {
          if (data !== null) {
            this.realEstateNews = data.content;
            this.totalPages = data.totalPages;
            this.pageNumber = data.pageable.pageNumber;
            this.size = data.size;
            this.page = data.pageable.pageNumber;
            this.message = '';
          } else {
            this.message = 'Not found !!!';
          }
          this.flag = true;
        });
      } else {
        this.realService.search(this.page, this.kindOfNews, this.direction, this.realEstateType).subscribe(data => {
          if (data !== null) {
            this.realEstateNews = data.content;
            this.totalPages = data.totalPages;
            this.pageNumber = data.pageable.pageNumber;
            this.size = data.size;
            this.page = data.pageable.pageNumber;
            this.message = '';
            console.log(this.message);
          } else {
            this.message = 'Not found !!!';
          }
          this.flag = true;
        });
      }

    }
  }

  previousClick(index) {
    this.page = this.page - index;
    this.ngOnInit();
  }

  nextClick(index) {
    this.page = this.page + index;
    console.log('next pay ' + this.page);
    this.ngOnInit();
  }

  findPaginnation(value: number) {
    this.page = value - 1;
    this.ngOnInit();
  }

  onsubmit() {
    this.flag = false;
    this.search();
  }
}
