import { configureStore } from '@reduxjs/toolkit'
import  taskSlice  from './SliceTask/Slice'

export const store = configureStore({
  reducer: {task: taskSlice},
})