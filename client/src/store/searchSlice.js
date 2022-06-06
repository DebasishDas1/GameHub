import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  game: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updaeSearch: (state, action) => {
      state.game = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updaeSearch } = searchSlice.actions

export default searchSlice.reducer