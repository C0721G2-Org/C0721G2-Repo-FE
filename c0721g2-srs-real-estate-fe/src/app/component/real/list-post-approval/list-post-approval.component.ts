import {Component, OnInit} from '@angular/core';
import {RealEstateNew} from '../../../model/real/real-estate-new';
import {RealService} from '../../../service/real.service';
import {DeletePostApprovalComponent} from '../delete-post-approval/delete-post-approval.component';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-post-approval',
  templateUrl: './list-post-approval.component.html',
  styleUrls: ['./list-post-approval.component.scss']
})
export class ListPostApprovalComponent implements OnInit {
  realEstateNews: RealEstateNew[];
  // page: number = 1;
  realForm: FormGroup;


  kindOfNewsList = [{id: 1, name: 'Bán'}, {id: 2, name: 'Cho thuê'}];

  directionList = [{id: 1, name: 'Đông'}, {id: 2, name: 'Đông Nam'}, {id: 3, name: 'Đông Bắc'},
    {id: 4, name: 'Tây'}, {id: 5, name: 'Tây Nam'}, {id: 6, name: 'Tây Bắc'}, {id: 7, name: 'Nam'}, {
      id: 8, name: 'Bắc'
    }];

  realEstateTypeList = [{id: 1, name: 'Đất'}, {id: 2, name: 'Nhà ở'}];

  constructor(private realService: RealService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.realService.getAllListPostApproval().subscribe(data => {
      this.realEstateNews = data.content;
    });
    this.realForm = new FormGroup({
      kindOfNews: new FormControl(''),
      direction: new FormControl(''),
      realEstatetType: new FormControl(''),
    });
  }


  // delete(id: any): void {
  //   this.realService.getById(id).subscribe(data => {
  //     const dialogRef = this.dialog.open(DeletePostApprovalComponent, {
  //       width: '500px',
  //       data: {customer: data},
  //       disableClose: true
  //     });
  //
  //     dialogRef.afterClosed().subscribe(result => {
  //       this.ngOnInit();
  //     });
  //   });
  // }


  search() {
    // tslint:disable-next-line:max-line-length
    this.realService.search(this.realForm.value.kindOfNews, this.realForm.value.direction, this.realForm.value.realEstatetType).subscribe(data => {
      this.realEstateNews = data.content;
      console.log(data);
    });
  }
}
