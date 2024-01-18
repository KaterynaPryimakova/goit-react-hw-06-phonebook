import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactsReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

// export const store = createStore(rootReducer);
export const store = configureStore({
  reducer: rootReducer,
});
