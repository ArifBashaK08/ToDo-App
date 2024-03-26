import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import { ToDoProvider } from './context'

function App() {
  const [toDos, setToDos] = useState([])

  const addToDo = (todo) => {
    setToDos((prev) => [{ id: Date.now, ...todo }, ...prev])
  }
  const updateToDo = (id, todo) => {
    setToDos((prev) => prev.map((prevToDo) => (
      prevToDo.id === id ? todo : prevToDo
    )))
  }
  const toggleComplete = (id) => {
    setToDos((prev) => prev.map((prevToDo) => (
      prevToDo.id === id ? { ...prevToDo, completed: !prevToDo.completed } : null
    )))
  }
  const removeToDo = (id) => {
    setToDos((prev) => prev.filter((toDo) => toDo.id !== id
    ))
  }

useEffect(() => {
 
  
}, [])


  return (
    <ToDoProvider value={{ toDos, addToDo, updateToDo, removeToDo, toggleComplete }}>
      <Form />
    </ToDoProvider>
  )
}

export default App
