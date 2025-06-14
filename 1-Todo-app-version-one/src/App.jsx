import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import './App.css'
function App() {
  return <center className="todo-container">
    <AppName />
    <AddTodo />
    <div className="items-container">
      <TodoItem item="Buy Milk" date="11/06/2005" />
      <TodoItem item="Go To Office" date="21/06/2005" />
    </div>

  </center>
}

export default App;
