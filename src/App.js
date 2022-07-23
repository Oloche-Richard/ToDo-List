import "./styles.css";
import Header from "./component/Header/Header"
import TodoList from "./component/Todos/TodoList"
 
 export default function App() {
 const todos = [
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

  return (
    <div className= 'app'>
    <Header/>
    <TodoList todos={todos}/>
    </div>
  )
}
