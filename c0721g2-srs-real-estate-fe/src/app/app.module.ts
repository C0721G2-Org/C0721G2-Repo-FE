import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerDeleteComponent } from './component/customer/customer-delete/customer-delete.component';
import { CustomerDetailComponent } from './component/customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './component/employee/employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './component/employee/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './component/employee/employee-edit/employee-edit.component';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDeleteComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
