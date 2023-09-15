import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Header} from "./common/components/header/header";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home/home.module').then(m => m.HomeModule),
    data: { header: Header.DEFAULT }
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    data: { header: Header.AUTH }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
