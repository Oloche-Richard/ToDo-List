import "./Todo.css";
import {useState} from 'react'


const Todo = (props) => {
// const [updateTodo, setUpdateTodo] = useState(props.Dummy_todos)

// const deleteTodo = (index) => () => {
//   setUpdateTodo((items) => updateTodo.filter((_, i) => i !== index));
//   return (
//     <>
//     {updateTodo.map((it, index) => {
//       return (
//         <div key={it.id}> {it.title}</div>
//       )
//     })}
//   );
//   </>

//   )}

  return (
    <div className='todo'
    //  onClick={props.deletehandler}
    >
    <div className='todo-item'>
    <input type='checkBox' className='checkbox-round' />
    <p className='todo-title'>{props.title}</p>
    <button onClick={props.deleteHandler}> X</button>
    </div>
    </div>
  )
    }

export default Todo;