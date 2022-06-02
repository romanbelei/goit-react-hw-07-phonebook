import { createReducer } from '@reduxjs/toolkit';
import { filterAction } from './actions';

export const reducer = createReducer(
  { filter: '' },
  {
    [filterAction]: (state, action) => {
      state.filter = action.payload;
    },
  }
);
