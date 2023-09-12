import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthOldRoutingModule } from './auth-old-routing.module';
import {AuthOldComponent} from "../auth-old.component";
import {SignInOldComponent} from "../components/sign-in/sign-in-old.component";
import {SignUpOldComponent} from "../components/sign-up/sign-up-old.component";
import {ResetPassOldComponent} from "../components/reset-pass/reset-pass-old.component";
import {CheckEmailOldComponent} from "../components/check-email/check-email-old.component";
import {VerificationOldComponent} from "../components/verification/verification-old.component";
import {CreatePasswordOldComponent} from "../components/create-password/create-password-old.component";


@NgModule({
  declarations: [
    AuthOldComponent,
    SignInOldComponent,
    SignUpOldComponent,
    ResetPassOldComponent,
    CheckEmailOldComponent,
    VerificationOldComponent,
    CreatePasswordOldComponent,
  ],
  imports: [
    CommonModule,
    AuthOldRoutingModule
  ]
})
export class AuthOldModule { }
