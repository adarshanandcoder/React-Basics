import React, { useState } from 'react'
import useTodo from '../Context/TodoContext'

function TodoForm() {
    const [todo , setTodo] = useState("")

    const {addTodo} = useTodo()

    const add = (e) =>{
        e.preventDefault()

        if(!todo) return 
        
        addTodo({todo , completed:false})
        setTodo("")
    }


  return (
    <form onSubmit={add} className='flex'>
        <input
        type="text" 
        placeholder="Write Todo...."
        value={todo}
        onChange = {(e)=>setTodo(e.target.value)}
        className='w-full border border-black/30 rounded-lg outline-none px-3 duration-150 py-1.5 bg-white/25'
        />
        <button 
        className='rounded-lg px-3 py-1 bg-green-600 text-white shrink-0'
        type="submit"
        >
            Add
        </button>
    </form>
  )
}

export default TodoForm