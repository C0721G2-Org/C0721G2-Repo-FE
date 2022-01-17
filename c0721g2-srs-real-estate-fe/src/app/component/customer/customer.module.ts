import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {ShareModule} from '../share/share.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [CustomerEditComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerDeleteComponent,
    CustomerCreateComponent,
  ],
  exports: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ]
})
export class CustomerModule {
}
