import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecurityRoutingModule} from './security-routing.module';
import {LoginComponent} from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {ReactiveFormsModule} from '@angular/forms';
import { VerifyResetPasswordComponent } from './verify-reset-password/verify-reset-password.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import {ShareModule} from '../share/share.module';



@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, VerifyResetPasswordComponent, AccessDeniedComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    ShareModule]
})
export class SecurityModule {
}
