import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [CustomerEditComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerDeleteComponent,
    CustomerCreateComponent,
  ],
    exports: [
        CustomerDetailComponent,
        CustomerCreateComponent
    ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
