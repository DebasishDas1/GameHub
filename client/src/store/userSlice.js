import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone: 1234567890,
    pasword: '',
    tags: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.first_name = 'updated';
      state.pasword = '';
    },
    signup: (state, action) => {
      state.value -= 1
    },
    updateProfile: (state, action) => {
      state.value += action.payload
    },
    deleteProfile: (state, action) => {

    },
    forgotPassword: (state, action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const {  login,
                signup,
                updateProfile,
                deleteProfile,
                forgotPassword
            } = userSlice.actions

export default userSlice.reducer