import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomerModule} from './component/customer/customer.module';
import {RealModule} from './component/real/real.module';
import {EmployeeModule} from './component/employee/employee.module';
import {SecurityModule} from './component/security/security.module';
import {ShareModule} from './component/share/share.module';
import {CustomerDetailComponent} from './component/customer/customer-detail/customer-detail.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    EmployeeModule,
    CustomerModule,
    SecurityModule,
    RealModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
