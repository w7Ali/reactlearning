import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import style from './App.module.css'


function App() {

  const todoItems = [{
    item: 'Buy Milk',
    date: '15/06/2025'
  },
  {
    item: 'Go To Office',
    date: '25/06/2025'
  }
]
  return (
    <center className={style['todo-container']}>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
    </center>
  )
}

export default App;
