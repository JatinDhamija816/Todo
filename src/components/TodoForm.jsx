import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'
const TodoForm = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandle = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <div className='justify-center flex mt-10 font-mono'>
            <input type="text" placeholder='Enter Todo' className='border-b-2 w-2/5 text-lg outline-0 ' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodoHandle} className='border-b-2 hover:bg-slate-400 px-5 rounded-tl-lg rounded-tr-lg text-lg'>Add</button>
        </div>
    )
}

export default TodoForm
