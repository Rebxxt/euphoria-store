import {HeaderDefaultComponent} from "./components/header-default/header-default.component";
import {HeaderAuthComponent} from "./components/header-auth/header-auth.component";

export enum Header {
  DEFAULT = 'default',
  AUTH = 'auth',
}

export const headerByType: Record<Header, any> = {
  [Header.DEFAULT]: HeaderDefaultComponent,
  [Header.AUTH]: HeaderAuthComponent,
}
