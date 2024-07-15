import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1,text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers : {
        //We always have access of state and action state means previous state and action means what we have to do
        addTodo : (state,action) => {
            const todo = {
                id:nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) =>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo : (state , action) =>{
            state.todos.map((todo)=>todo.map((prevTodo)=> (prevTodo.id === id ? {...prevTodo,text:action.payload} : prevTodo)))
        }
    }
})

export const {addTodo , removeTodo , updateTodo } = todoSlice.actions

export default todoSlice.reducer