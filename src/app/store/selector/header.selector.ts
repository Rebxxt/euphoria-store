import {createSelector} from "@ngrx/store";
import {HeaderState} from "../reducer/header.reducer";

const headerState = (state: any) => state.header;

export const headerSelector = createSelector(
  headerState,
  (state: HeaderState) => state.header
)
