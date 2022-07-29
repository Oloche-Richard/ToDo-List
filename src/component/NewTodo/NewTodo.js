import "./NewTodo.css";
 import {useState} from "react";
 
 
 const NewTodo = (props) => {
   const [enteredTodo, setEnteredTodo] = useState('')
    
    const todoHandler = (event) => {
      setEnteredTodo(event.target.value)
    } 
    const submitHandler = (event) => {
      event.preventDefault();

     const todoData =  {title:enteredTodo};

     props.onSaveTodoData(todoData);
     setEnteredTodo('')
    }
   return (
     <form className='new-todo-input' onSubmit={submitHandler}>
     <input 
      type='text'
      value={enteredTodo}
      placeholder='create a new todo'
      onChange={todoHandler}
     />
     <button> Add </button>
     </form>
   )
 }

 export default NewTodo