import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <h1 className='text-white'>Learn about Redux-toolkit</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
