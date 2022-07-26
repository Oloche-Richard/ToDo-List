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

 const addTodoHandler = event => {
   console.log('in app js');
   console.log(todos);
 }

  return (
    <div className= 'app'>
    <Header onAddExpense/>
    <TodoList todos={todos}/>
    </div>
  )
}
