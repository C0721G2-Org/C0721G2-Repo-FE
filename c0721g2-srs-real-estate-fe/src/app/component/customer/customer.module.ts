import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import { ListPostApprovalComponent } from './list-post-approval/list-post-approval.component';
import { DeletePostApprovalComponent } from './delete-post-approval/delete-post-approval.component';
import { DetailPostApprovalComponent } from './detail-post-approval/detail-post-approval.component';

@NgModule({
  declarations: [CustomerEditComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerDeleteComponent,
    CustomerCreateComponent,
    ListPostApprovalComponent,
    DeletePostApprovalComponent,
    DetailPostApprovalComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
