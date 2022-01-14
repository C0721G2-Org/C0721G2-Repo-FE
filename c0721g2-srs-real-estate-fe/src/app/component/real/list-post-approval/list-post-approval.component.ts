import { Component, OnInit } from '@angular/core';
import {RealEstateNew} from '../../../model/real/real-estate-new';
import {RealService} from '../../../service/real.service';
import {DeletePostApprovalComponent} from '../delete-post-approval/delete-post-approval.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list-post-approval',
  templateUrl: './list-post-approval.component.html',
  styleUrls: ['./list-post-approval.component.scss']
})
export class ListPostApprovalComponent implements OnInit {
  realEstateNews: RealEstateNew[] = [];
  // page: number = 1;
  search: any;

  constructor(private realService: RealService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.showListPostApproval();
  }

  showListPostApproval() {
    this.realService.getAllListPostApproval().subscribe(data => {
      this.realEstateNews = data.content;
    });
  }

  // searchPostApproval() {
  //   this.realService.getSearchPostApproval(this.search).subscribe(data => {
  //     this.realEstateNews = data.content;
  //   });
  // }

  // searchPostApproval() {
  //   // @ts-ignore
  //   this.realService.getSearchPostApproval(this.search).subscribe(data => {
  //     this.realEstateNews = data.content;
  //   });
  // }
  searchArea() {
    this.realService.search(this.search).subscribe(value => {
      this.realEstateNews = value;
      // this.page = 1;
    });
  }

  delete(id: any): void {
    this.realService.getById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeletePostApprovalComponent, {
        width: '500px',
        data: {customer: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }
}
