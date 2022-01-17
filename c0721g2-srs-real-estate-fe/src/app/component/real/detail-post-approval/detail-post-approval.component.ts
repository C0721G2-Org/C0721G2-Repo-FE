import {Component, Inject, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {RealService} from "../../../service/real.service";
import {RealDetailComponent} from "../real-detail/real-detail.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RealEstateNew} from "../../../model/real/real-estate-new";

@Component({
  selector: 'app-detail-post-approval',
  templateUrl: './detail-post-approval.component.html',
  styleUrls: ['./detail-post-approval.component.scss']
})
export class DetailPostApprovalComponent implements OnInit {
  id: number;
  realEstateNews: RealEstateNew;
  private subscription: Subscription;

  constructor(
    private medicalService: RealService,
    public dialogRef: MatDialogRef<RealDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.realEstateNews = this.data.approveData;
  }

  deleteMedical() {
    this.subscription = this.medicalService.approve(this.realEstateNews.id).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
