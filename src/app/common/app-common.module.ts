import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrentHeaderComponent} from "./current-header/current-header.component";
import {AuthHeaderComponent} from "./current-header/components/auth-header/auth-header.component";
import {StandardHeaderComponent} from "./current-header/components/standart-header/standard-header.component";
import {RouterLink, RouterLinkWithHref} from "@angular/router";
import { InputSearchDirective } from './directives/input-search.directive';
import { SearchButtonComponent } from './current-header/components/search-button/search-button.component';
import { SelectComponent } from './components/select/select.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { DragButtonDirective } from './directives/drag-button.directive';



@NgModule({
  declarations: [
    CurrentHeaderComponent,
    AuthHeaderComponent,
    StandardHeaderComponent,
    InputSearchDirective,
    SearchButtonComponent,
    SelectComponent,
    AdminPanelComponent,
    DragButtonDirective,
  ],
  exports: [
    CurrentHeaderComponent,
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLink
  ]
})
export class AppCommonModule { }
