import axios from "axios";

const { createAsyncThunk } = require("@reduxjs/toolkit");

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
    set(token)
        { axios.defaults.headers.common.Authorization = `Bearer ${token}`},
            unset(token){
            axios.defaults.headers.common.Authorization = "";
        },
   
};



export const registerThunk= createAsyncThunk('auth/signUp',async body =>{
    try {
        const { data } = await axios.post('/users/signup', body);
        token.set(data.token);
        return  data
    } catch (error) {
        return error
    }
})

export const loginThunk= createAsyncThunk('auth/logined',async body =>{
    try {
        const { data } = await axios.post('/users/login', body)
        token.set(data.token);
        return  data
    } catch (error) {
        return error
    }
    })


export const logOutThunk = createAsyncThunk('auth/logOut',async() =>{
    try {
        await axios.post('/users/logout');
        token.unset();
        
    } catch (error) {
        
    }
})

export const currentUser = createAsyncThunk('auth/current', async(_, thunkAPI)=>{
const state = thunkAPI.getState()
const persToken = state.auth.token;

if(persToken === null){
    return thunkAPI.rejectWithValue('Unable to fetch user');
}

token.set(persToken);
    try {
        const {data} = await axios.get('/users/current')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

    })