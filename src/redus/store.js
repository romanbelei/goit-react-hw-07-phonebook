import { configureStore, createReducer } from '@reduxjs/toolkit';
import { contactApi } from './Contacts/contactSlice';
import { filterAction } from './actions';

const reducer = createReducer(
  { filter: 'a' },
  {
    [filterAction]: (state, action) => {
      state.filter = action.payload;
    },
  }
);

export const store = configureStore({
  reducer: {
    reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
