import "./styles.css";
import Header from "./component/Header/Header"
import TodoList from "./component/Todos/TodoList"
import {useState} from "react"

 const Dummy_todos = [
   {
   id: 'e1',
   title: 'Buy a Book',
   },
   {
     id: 'e2',
     title: 'ride a bicycle',
   },
   {
     id: 'e3',
     title: ' Go hiking',
   },
   {
     id: 'e4',
     title:'Develop a site',
   },
      {
     id: 'e5',
     title:'Learn how to dance',
   }
 ]

 export default function App() {
     const [updateTodo, setUpdateTodo] = useState(Dummy_todos)
const [todos ,setTodo] = useState(Dummy_todos);

const deleteTodo = index =>  {
  setUpdateTodo((items) => updateTodo.filter((_, i) => i !== index))
  return (
    <>
    {updateTodo.map((it, index) => {
      return (
        <div key={it.id}> {it.title} 
        <button onClick={deleteTodo(index)}></button>
        </div>
      )
    })}
  );
  </>

  )}


 const addTodoHandler = todo => {
   setTodo((prevTodos) => {
     return [todo, ...prevTodos]
   })
 }

  return (
    <div className= 'app'>
    <Header onAddTodo={addTodoHandler}/>
    <TodoList
     todos={todos}
    deleteHandler={deleteTodo}/>
    </div>
  )
}
