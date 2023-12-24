import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllContactsThunk = createAsyncThunk('contacts/getContacts', async( token, thunkAPI) =>{
    try {
        const { data } = await axios.get('/contacts', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const createContactsThunk = createAsyncThunk('contacts/addContact', async(contact, thunkAPI) =>{
    try {
        await axios.post('/contacts', contact);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
  
);

export const deleteContactsThunk = createAsyncThunk('/contacts/{contactId}', async(contactId, thunkAPI) =>{
    try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})