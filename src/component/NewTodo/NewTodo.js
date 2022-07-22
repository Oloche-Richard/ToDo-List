import "./NewTodo.css"
// import {useState} from "react"
 
 
 const NewTodo = () => {
  //  const [enteredTodo, setEnteredTodo] = useState('')
    const todoHandler = (event) => {
      console.log(event.target.value)
    } 
   return (
     <div className='new-todo-input'>
     <input type='text'
      placeholder='create a new todo'
      onChange={todoHandler}
     />
     </div>
   )
 }

 export default NewTodo