import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth.component";
import {SignInOldComponent} from "../auth-old/components/sign-in/sign-in-old.component";
import {AuthPage} from "../../common/types/auth";
import {SignUpOldComponent} from "../auth-old/components/sign-up/sign-up-old.component";
import {CreatePasswordOldComponent} from "../auth-old/components/create-password/create-password-old.component";
import {VerificationOldComponent} from "../auth-old/components/verification/verification-old.component";
import {ResetPassOldComponent} from "../auth-old/components/reset-pass/reset-pass-old.component";
import {CheckEmailOldComponent} from "../auth-old/components/check-email/check-email-old.component";
import {SignInComponent} from "./components/auth-content/components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/auth-content/components/sign-up/sign-up.component";
import {VerificationComponent} from "./components/auth-content/components/verification/verification.component";
import {ResetPasswordComponent} from "./components/auth-content/components/reset-password/reset-password.component";
import {CheckEmailComponent} from "./components/auth-content/components/check-email/check-email.component";
import {CreatePasswordComponent} from "./components/auth-content/components/create-password/create-password.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: AuthPage.SIGN_IN,
        component: SignInComponent,
        data: { animation: 'SignInComponent' },
      },
      {
        path: AuthPage.SIGN_UP,
        component: SignUpComponent,
        data: { animation: 'SignUpComponent' },
      },
      {
        path: AuthPage.CREATE_PASSWORD,
        component: CreatePasswordComponent,
        data: { animation: 'CreatePasswordComponent' },
      },
      {
        path: AuthPage.VERIFICATION,
        component: VerificationComponent,
        data: { animation: 'VerificationComponent' },
      },
      {
        path: AuthPage.RESET_PASSWORD,
        component: ResetPasswordComponent,
        data: { animation: 'ResetPasswordComponent' },
      },
      {
        path: AuthPage.CHECK_EMAIL,
        component: CheckEmailComponent,
        data: { animation: 'CheckEmailComponent' },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
