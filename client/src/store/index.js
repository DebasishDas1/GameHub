import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import searchReducer from './searchSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    user: userReducer,
  },
})