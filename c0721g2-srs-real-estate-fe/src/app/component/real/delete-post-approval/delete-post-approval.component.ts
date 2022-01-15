import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RealService} from '../../../service/real.service';

@Component({
  selector: 'app-delete-post-approval',
  templateUrl: './delete-post-approval.component.html',
  styleUrls: ['./delete-post-approval.component.scss']
})
export class DeletePostApprovalComponent implements OnInit {
  public id: number;
  public name: string;

  constructor(public dialogRef: MatDialogRef<DeletePostApprovalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public realService: RealService) { }

  ngOnInit(): void {
    this.id = this.data.real.id;
    this.name = this.data.real.id;
  }
  cancel(): void {
    this.dialogRef.close();
  }
  delete() {
    this.realService.delete(this.id).subscribe(() => {
      this.dialogRef.close();
      this.alert();
    });
  }

  alert() {
    console.log('Delete successfuly!!!', 'title');
  }
}
