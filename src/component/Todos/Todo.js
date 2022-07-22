import "./Todo.css"
const Todo = (props) => {
  return (
    <div className='todo'>
    <div className='todo-item'>
    {/* <span className='todo-symbol'>tick symbol</span> */}
    <input type='checkBox' className='checkbox-round' />
    <p className='todo-title'>bring me water </p>
    </div>
    </div>
  )
}

export default Todo;