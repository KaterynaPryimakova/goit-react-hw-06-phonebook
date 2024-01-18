import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});
