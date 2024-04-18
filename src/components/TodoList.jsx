import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'
import DeleteIcon from '@mui/icons-material/Delete';
const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <div className=''>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id} className='flex justify-between bg-slate-300 w-1/3 mx-auto mt-5 rounded-lg p-2'>
                            <p className='ml-3'>{todo.text}</p>
                            <button className='mr-3' onClick={() => dispatch(removeTodo(todo.id))}><DeleteIcon color='error' /></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList
