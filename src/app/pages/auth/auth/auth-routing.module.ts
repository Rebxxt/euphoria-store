import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "../auth.component";
import {SignInComponent} from "../components/sign-in/sign-in.component";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {ResetPassComponent} from "../components/reset-pass/reset-pass.component";
import {VerificationComponent} from "../components/verification/verification.component";
import {CheckEmailComponent} from "../components/check-email/check-email.component";
import {CreatePasswordComponent} from "../components/create-password/create-password.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'reset',
        component: ResetPassComponent,
      },
      {
        path: 'check-email',
        component: CheckEmailComponent,
      },
      {
        path: 'verification',
        component: VerificationComponent,
      },
      {
        path: 'create-password',
        component: CreatePasswordComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
