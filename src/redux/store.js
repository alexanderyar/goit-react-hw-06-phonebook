import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

// import { contactsReducer } from "./contactsSlice/contactsSlice";

 import { contactsSlice } from "./contactsSlice/contactsSlice";
import { filterSlice } from "./filterSlice/filterSlice";

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// config for redux-persist;
const persistConfig = {
  key: 'root',
  storage,
}

const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);