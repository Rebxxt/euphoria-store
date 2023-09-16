import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthPicComponent } from './components/auth-pic/auth-pic.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { SignInComponent } from './components/auth-content/components/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth-content/components/sign-up/sign-up.component';
import { VerificationComponent } from './components/auth-content/components/verification/verification.component';
import { CreatePasswordComponent } from './components/auth-content/components/create-password/create-password.component';
import { ResetPasswordComponent } from './components/auth-content/components/reset-password/reset-password.component';
import { CheckEmailComponent } from './components/auth-content/components/check-email/check-email.component';
import { DividerComponent } from './components/auth-content/common/divider/divider.component';
import { AuthButtonDirective } from './components/auth-content/directives/auth-button.directive';
import { AuthInputComponent } from './components/auth-content/common/auth-input/auth-input.component';
import { AuthCheckboxComponent } from './components/auth-content/common/auth-checkbox/auth-checkbox.component';


@NgModule({
  declarations: [
    AuthComponent,
    AuthPicComponent,
    AuthContentComponent,
    SignInComponent,
    SignUpComponent,
    VerificationComponent,
    CreatePasswordComponent,
    ResetPasswordComponent,
    CheckEmailComponent,
    DividerComponent,
    AuthButtonDirective,
    AuthInputComponent,
    AuthCheckboxComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
