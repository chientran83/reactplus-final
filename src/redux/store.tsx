import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import taskSlice from './slices/taskSlice'

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    task: taskSlice.reducer
  }
})
export default store