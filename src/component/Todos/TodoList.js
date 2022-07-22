import "./TodoList.css"
import Todo from "./Todo.js"
import Card from "./../Ui/Card"
import Active from "./Active"
const TodoList = (props) => {
  return (
    <Card className='list-section'>
    <ul>
    <li>  
      <Todo
   //  key={props.todos.id}
   //  title={props.todos[0].title}
     />
    </li>
    <li>
    <Todo 
   // title={props.todos[1].title}
    />
    </li>
    <li>  
    <Todo 
   // title={props.todos[2].title}
    />
    </li>
    <li> 
    <Todo 
    //title={props.todos[3].title}
    />
    </li>
    </ul>
    <Active/>
    </Card>
  )
}

export default TodoList;