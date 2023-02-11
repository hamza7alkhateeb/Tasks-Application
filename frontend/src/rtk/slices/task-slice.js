import { createSlice } from "@reduxjs/toolkit";


let initialState =[]
const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            return action.payload;
        }
    }
})


export const { setTasks } = taskSlice.actions;
export default taskSlice;