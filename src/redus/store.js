import { configureStore, createReducer } from '@reduxjs/toolkit';
import { contactApi } from './Contacts/contactSlice';
import { filterAction } from './actions';

const reducer = createReducer(
  { filter: '' },
  {
    [filterAction]: (state, action) => {
      state.filter = action.payload;
    },
  }
);

export const store = configureStore({
  reducer: {
    contacts: reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
