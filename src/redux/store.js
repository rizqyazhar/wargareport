import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slices/auth/register.slice.js";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const storage = {
  getItem: (key) => Promise.resolve(window.localStorage.getItem(key)),
  setItem: (key, value) =>
    Promise.resolve(window.localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(window.localStorage.removeItem(key)),
};

const rootReducer = combineReducers({
  accounts: registerReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["accounts"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE],
      },
    });
  },
});

export const persistor = persistStore(store);
export default store;
