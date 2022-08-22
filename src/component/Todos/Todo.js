import "./Todo.css";
import {useState} from 'react'


const Todo = (props) => {
const handleEvent = event => {
  event.currentTarget.classList.toggle('todo-delete')
}

  return (
    <div className='todo'>
    <div className='todo-item'>
    <input type='checkBox' className='checkbox-round' />
    <p className='todo-title'>{props.title}</p>
    <button className='todo-delete'> X</button>
    </div>
    </div>
  )
    }

export default Todo;