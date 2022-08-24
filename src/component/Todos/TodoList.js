import "./TodoList.css"
import Todo from "./Todo.js"
import Card from "./../Ui/Card"




const TodoList = (props) => {
  return (
    <Card className='list-section'>
    {props.todos.map(todo =>  <Todo  key={todo.id} title={todo.title}/>)}
    </Card>
  )
}

export default TodoList;