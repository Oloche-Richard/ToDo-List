import "./Todo.css"
const Todo = (props) => {
  return (
    <div className='todo'>
    <div className='todo-item'>
    <input type='checkBox' className='checkbox-round' />
    <p className='todo-title'>{props.title}</p>
    </div>
    </div>
  )
}

export default Todo;