import { createSlice } from '@reduxjs/toolkit'
import { TaskType } from '../../services/types/TaskType'
import { taskFetch } from '../actions/taskAction'

interface initialStateType {
  loading: boolean,
  tasks: TaskType[],
  error: string | null,
}

const initialState: initialStateType = {
  loading: false,
  tasks: [],
  error: null,
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: {
    [taskFetch.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [taskFetch.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.tasks = payload
    },
    [taskFetch.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export default taskSlice