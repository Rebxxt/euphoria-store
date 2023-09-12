import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthOldComponent} from "../auth-old.component";
import {SignInOldComponent} from "../components/sign-in/sign-in-old.component";
import {SignUpOldComponent} from "../components/sign-up/sign-up-old.component";
import {ResetPassOldComponent} from "../components/reset-pass/reset-pass-old.component";
import {VerificationOldComponent} from "../components/verification/verification-old.component";
import {CheckEmailOldComponent} from "../components/check-email/check-email-old.component";
import {CreatePasswordOldComponent} from "../components/create-password/create-password-old.component";

const routes: Routes = [
  {
    path: '',
    component: AuthOldComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInOldComponent,
      },
      {
        path: 'sign-up',
        component: SignUpOldComponent,
      },
      {
        path: 'reset',
        component: ResetPassOldComponent,
      },
      {
        path: 'check-email',
        component: CheckEmailOldComponent,
      },
      {
        path: 'verification',
        component: VerificationOldComponent,
      },
      {
        path: 'create-password',
        component: CreatePasswordOldComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthOldRoutingModule { }
