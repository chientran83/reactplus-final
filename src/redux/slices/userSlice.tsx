import { createSlice } from '@reduxjs/toolkit'
import { userRegister } from '../actions/userAction'

const initialState = {
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      state.loading = false
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export default userSlice