import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth.component";
import {AuthPage} from "../../common/types/auth";
import {SignInComponent} from "./components/auth-content/components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/auth-content/components/sign-up/sign-up.component";
import {VerificationComponent} from "./components/auth-content/components/verification/verification.component";
import {ResetPasswordComponent} from "./components/auth-content/components/reset-password/reset-password.component";
import {CheckEmailComponent} from "./components/auth-content/components/check-email/check-email.component";
import {CreatePasswordComponent} from "./components/auth-content/components/create-password/create-password.component";
import {Header} from "../../common/components/header/header";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    data: { header: Header.AUTH },
    children: [
      {
        path: '',
        redirectTo: AuthPage.SIGN_IN,
        pathMatch: "full",
      },
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
