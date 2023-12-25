import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filterReducer } from "./filterSlice/filterSlice";
import { contactsReducer } from "./contactsSlice/contactSlice"; 
import { authReducer } from "./auth/slice";



const persistConfig = {
    key: 'root',
    storage,
    whitelist:['token',]
}
 
const persistedReducer = persistReducer(persistConfig, authReducer);

const persistConfig2 = {
    key: 'roots',
    storage,
    whitelist:['contacts',]
}
 
const persistedReducer2 = persistReducer(persistConfig2, contactsReducer);

export const store = configureStore({reducer: {
        contacts: persistedReducer2,
    filter: filterReducer,
    auth: persistedReducer,
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
 
export const persistor = persistStore(store)