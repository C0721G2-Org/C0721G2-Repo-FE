import {Component, OnInit} from '@angular/core';
import {RealService} from '../../../service/real.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RealEstateNew} from '../../../model/real/real-estate-new';
import {Subscription} from 'rxjs';
import {Image} from '../../../model/image/image';
import {MatDialog} from '@angular/material/dialog';
import {EmailComponent} from '../email/email.component';

@Component({
  selector: 'app-real-detail',
  templateUrl: './real-detail.component.html',
  styleUrls: ['./real-detail.component.scss']
})
export class RealDetailComponent implements OnInit {

  constructor(private realService: RealService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }

  realEstate: RealEstateNew;
  id: string;
  url: string;
  img: Image;
  imgList: Image[];
  private subscription: Subscription;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      // console.log(this.id);
      this.subscription = this.realService.findRealEstateNewById(this.id).subscribe(data => {
          this.realEstate = data;
          this.img = this.realEstate.imageList.shift();
          this.imgList = this.realEstate.imageList;
          // console.log(this.realEstate);
          // console.log(this.imgList);
          // console.log(this.img);
        }
        , error => {
          console.log(this.realEstate);
        });
    });
  }

  openDialog() {
    console.log('a');
    this.realService.findRealEstateNewById(this.id).subscribe(customerData => {
      console.log(this.id);
      const dialogRef = this.dialog.open(EmailComponent, {
        data: {id: this.id},
        width: '600px',
        panelClass: 'custom-modalbox',
        // Khi bấm ra ngoài dialog khong bi mat di
        disableClose: true
      });
      console.log('abc');
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }
}
