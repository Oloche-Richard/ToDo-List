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
const [todos ,setTodo] = useState(Dummy_todos);


 const addTodoHandler = todo => {
   setTodo((prevTodos) => {
     return [todo, ...prevTodos]
   })
 }

  return (
    <div className= 'app'>
    <Header onAddTodo={addTodoHandler}/>
    <TodoList todos={todos}/>
    </div>
  )
}
