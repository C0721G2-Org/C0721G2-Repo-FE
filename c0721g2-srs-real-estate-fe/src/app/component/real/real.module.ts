import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealRoutingModule } from './real-routing.module';
import { RealListComponent } from './real-list/real-list.component';
import { RealDeleteComponent } from './real-delete/real-delete.component';
import { RealDetailComponent } from './real-detail/real-detail.component';
import { HistoryPostComponent } from './history-post/history-post.component';
import { PostDetailOfCustomerComponent } from './post-detail-of-customer/post-detail-of-customer.component';
import { DetailPostApprovalComponent } from './detail-post-approval/detail-post-approval.component';
import { DeletePostApprovalComponent } from './delete-post-approval/delete-post-approval.component';
import { ListPostApprovalComponent } from './list-post-approval/list-post-approval.component';


@NgModule({
  declarations: [RealListComponent, RealDeleteComponent, RealDetailComponent, HistoryPostComponent, PostDetailOfCustomerComponent, DetailPostApprovalComponent, DeletePostApprovalComponent, ListPostApprovalComponent],
  imports: [
    CommonModule,
    RealRoutingModule
  ]
})
export class RealModule { }
