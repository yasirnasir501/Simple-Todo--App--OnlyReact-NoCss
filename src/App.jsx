import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {todo: 'Bring Parcel', completed: true},
    {todo: 'Post a letter', completed: false},
  ])

  const [todoInput, setTodoInput] = useState('')

  const handleMark=(todo)=>{
    console.log(todo)
    let todosCopy = todos.map(td=>{
      if (td.todo == todo.todo)
      {
        td.completed = true
      }
      return td
    })
    setTodos(todosCopy)
  }
  
    const handleUnMark=(todo)=>{
    console.log(todo)
    let todosCopy = todos.map(td=>{
      if (td.todo == todo.todo)
      {
        td.completed = false
      }
      return td
    })

    setTodos(todosCopy)

  }

  const addTodo = () =>{
    let todosCopy = [...todos]

    todosCopy.push({todo: todoInput, completed: false})
    setTodos(todosCopy)
  }

  return (
    <div className='App'>
     
     {todos.map(todo=>{
        return<>
        <p style={{color:'green', textDecoration: todo.completed === true ? 'line-through' : ''}}>{todo.todo}</p>
        <button onClick={()=>{handleMark(todo)}}>Mark</button>
        <button onClick={()=>{handleUnMark(todo)}}>UnMark</button>
        </>
     })}

     <br />
     <br />
     <input value={todoInput} onChange={(event)=>{setTodoInput(event.target.value)}} />
     <button onClick={addTodo}>Add Todo</button>

    </div>
  );
}

export default App;