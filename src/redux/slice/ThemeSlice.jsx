import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: localStorage.getItem('themeMode') ? 
            localStorage.getItem('themeMode') : 
            "theme-mode-light",

    color: localStorage.getItem('themeColor') ? 
            localStorage.getItem('themeColor') : 
            "theme-color-blue",
  },
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload 
    },
    changeColor: (state, action) => {
      state.color = action.payload
    },
  },
})

export const allSlice = {
    changeMode: counterSlice.actions.changeMode, 
    changeColor: counterSlice.actions.changeColor,
}

// export const { allSlice } = counterSlice.actions

export default counterSlice.reducer