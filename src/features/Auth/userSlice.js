import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from '../../api/userAPI';
import StorageKeys from '../../constants/storage-keys';
//create async action for register 
// First, create the thunk
export const register = createAsyncThunk(
	'users/register',
	async (payload) => {
		//call API to register
		const data = await userAPI.register(payload)
		//save data to LocalStorage
		localStorage.setItem(StorageKeys.TOKEN, data.jwt);
		localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))
		//return user data
		return data.user;
	}
  )

  export const login = createAsyncThunk(
	'users/login',
	async (payload) => {
		//call API to register
		const data = await userAPI.login(payload)
		//save data to LocalStorage
		localStorage.setItem(StorageKeys.TOKEN, data.jwt);
		localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))
		//return user data
		return data.user;
	}
  )
const userSlice = createSlice({
	name: 'user',
	initialState: {
		current: JSON.parse(localStorage.getItem(StorageKeys.USER) || {}),
		setting:{}
	},
	reducers:{

	},
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			state.current = action.payload;
		},
		[login.fulfilled]: (state, action) => {
			state.current = action.payload;
		},
	}


})
const {reducers } = userSlice;
export default reducers