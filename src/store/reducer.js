import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';
import { authReducer } from './auth/slice';


export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
});