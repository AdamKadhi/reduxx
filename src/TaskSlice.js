import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks:[
    {
        textt:"learn html",
        isDone:true
    },
    {
        textt:"learn css",
        isDone:true
    },
    {
        textt:"learn javascript",
        isDone:false
    },
  ]
}

export const TaskSlice = createSlice({
  name: 'taskslice',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = TaskSlice.actions

export default TaskSlice.reducer