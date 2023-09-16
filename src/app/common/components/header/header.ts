import { HeaderDefaultComponent } from './components/header-default/header-default.component';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';
import { Component, Type } from '@angular/core';

export enum Header {
  DEFAULT = 'default',
  AUTH = 'auth',
}

export const headerByType: Record<Header, Type<Component>> = {
  [ Header.DEFAULT ]: HeaderDefaultComponent as Type<Component>,
  [ Header.AUTH ]: HeaderAuthComponent as Type<Component>,
}
