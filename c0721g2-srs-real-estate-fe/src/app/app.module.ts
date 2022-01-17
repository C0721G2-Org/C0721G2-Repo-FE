import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CustomerModule} from './component/customer/customer.module';
import {RealModule} from './component/real/real.module';
import {SecurityModule} from './component/security/security.module';
import {ShareModule} from './component/share/share.module';

import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {AngularFireModule} from '@angular/fire';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {BottomSheetNotifyComponent} from './component/util/bottom-sheet-notify/bottom-sheet-notify.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {APP_BASE_HREF} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {EmployeeModule} from './component/employee/employee.module';


@NgModule({
  declarations: [
    AppComponent,
    BottomSheetNotifyComponent
  ],
  imports: [
    CustomerModule,
    SecurityModule,
    RealModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    EmployeeModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  entryComponents: [BottomSheetNotifyComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
