import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './Contacts/contactSlice';
import { reducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
