import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from "../auth.component";
import {SignInComponent} from "../components/sign-in/sign-in.component";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {ResetPassComponent} from "../components/reset-pass/reset-pass.component";
import {CheckEmailComponent} from "../components/check-email/check-email.component";
import {VerificationComponent} from "../components/verification/verification.component";
import {CreatePasswordComponent} from "../components/create-password/create-password.component";


@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ResetPassComponent,
    CheckEmailComponent,
    VerificationComponent,
    CreatePasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
