import {createAction, props} from '@ngrx/store';
import {HeaderActionType} from "../action-type/header.action-type";

export const setHeader = createAction(HeaderActionType.HEADER, props<{ header: string }>());
