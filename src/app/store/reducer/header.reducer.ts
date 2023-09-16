import {Action, createReducer, on} from '@ngrx/store';
import {setHeader} from "../action/header.action";

export interface HeaderState {
  header: string;
  test: string;
}

const initialState: HeaderState = {
  header: '',
  test: '',
};

export const headerReducer = createReducer(
  initialState,
  on(setHeader, (state, { header }) => ({ ...state, header })),
);

export function distributeHeaderReducer(state: HeaderState | undefined, action: Action) {
  return headerReducer(state, action);
}
