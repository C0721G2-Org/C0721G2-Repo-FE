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
import {MatDialogModule} from '@angular/material/dialog';
import {SocialLoginModule, SocialAuthServiceConfig} from 'angularx-social-login';
import {GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import {authInterceptorProviders} from './helpers/auth.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';

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
    MatDialogModule,
    SocialLoginModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '298834683029-khkrl7c9u4csbtokm3vbl5ijcc5i6eun.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('636920287629670')
        }
      ]
    } as SocialAuthServiceConfig,
  }, authInterceptorProviders,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
