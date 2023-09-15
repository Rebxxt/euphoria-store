import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrentHeaderOldComponent} from "./current-header-old/current-header-old.component";
import {AuthHeaderComponent} from "./current-header-old/components/auth-header/auth-header.component";
import {StandardHeaderComponent} from "./current-header-old/components/standart-header/standard-header.component";
import {RouterLink, RouterLinkWithHref} from "@angular/router";
import { InputSearchDirective } from './directives/input-search.directive';
import { SearchButtonComponent } from './current-header-old/components/search-button/search-button.component';
import { SelectComponent } from './components/select/select.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { DragButtonDirective } from './directives/drag-button.directive';
import { HeaderComponent } from './components/header/header.component';
import { HeaderAuthComponent } from './components/header/components/header-auth/header-auth.component';
import { HeaderDefaultComponent } from './components/header/components/header-default/header-default.component';



@NgModule({
  declarations: [
    CurrentHeaderOldComponent,
    AuthHeaderComponent,
    StandardHeaderComponent,
    InputSearchDirective,
    SearchButtonComponent,
    SelectComponent,
    AdminPanelComponent,
    DragButtonDirective,
    HeaderComponent,
    HeaderAuthComponent,
    HeaderDefaultComponent,
  ],
  exports: [
    CurrentHeaderOldComponent,
    AdminPanelComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLink
  ]
})
export class AppCommonModule { }
