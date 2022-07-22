import "./Active.css"
const Active = () => {
  return (
    <div className='active'>
    <div className='active-left'><span>3 items left</span></div>
    <div className='active-center'>
      <span>All</span>
      <span>Active</span>
      <span>Completed</span>
    </div>
    <div className='active-right'><span>Clear Completed</span></div>
    </div>
  )
}

export default Active