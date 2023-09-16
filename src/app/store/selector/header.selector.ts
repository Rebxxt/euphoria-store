import { createSelector } from '@ngrx/store';
import { HeaderState } from '../reducer/header.reducer';
import { AppState } from '../state/app.state';

const headerState = (state: AppState) => state.header;

export const headerSelector = createSelector(
  headerState,
  (state: HeaderState) => state.header
)
