import { useState } from 'react';
import './App.css'
import AddTaskForm from './components/AddTaskForm'
import Task from './components/Task'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    const taskToAdd = {
      id: tasks[tasks.length-1].id+1,
      text: newTask,
      completed: false
    }
    setTasks([...tasks, taskToAdd])
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks([...newTasks])
  }

  const markAsCompleted = (id) => {
    const newTasks = tasks
    let index = newTasks.findIndex(task => task.id===id)
    newTasks[index].completed = true
    setTasks([...newTasks])
  }

  return (
    <>
    <ul>
      <li className='card'>
        <form onSubmit={(e) => {
            e.preventDefault()
            addTask()
        }}>
            <input type='text' placeholder='Nombre tarea' onChange={(e) => setNewTask(e.target.value)}></input>
            <button type='submit'>Añadir tarea</button>
        </form>
        {/*<AddTaskForm />*/}
      </li>
      {tasks.map((task) => {
        return (
            <Task key={task.id} {...task, markAsCompleted, deleteTask} />
          )
      })}
    </ul>
    </>
  );
};

export default App;
