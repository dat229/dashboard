import { configureStore } from '@reduxjs/toolkit'

import ThemeSlice from './slice/ThemeSlice'

export default configureStore({
  reducer: {
        theme:  ThemeSlice,
    },
})