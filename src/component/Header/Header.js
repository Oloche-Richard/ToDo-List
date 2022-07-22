import "./Header.css"
import hero from "./../image/bg-desktop-dark.jpg"
import NewTodo from "./../NewTodo/NewTodo"
import TodoList from "./../Todos/TodoList"
 const Header = (props) => {
   const style = {
     heroStyle: {
      backgroundImage: `url(${hero})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center',
      height: '40vh',
      // display:'inline-block',
     }
   }
   return (
     <div  style={style.heroStyle}>
        <h1 className='bg-text'>To Do</h1>
        <div>
        <NewTodo/>
        </div>
        <div>
        </div>
     </div>
   )
 }
export default Header;