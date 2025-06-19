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

  const addTask = (text) => {
    const taskToAdd = {
      id: tasks.length ? tasks[tasks.length-1].id+1 : 1,
      text,
      completed: false
    }
    setTasks([...tasks, taskToAdd])
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks([...newTasks])
  }

  const toggleTask = (id) => {
    // const newTasks = tasks
    // let index = newTasks.findIndex(task => task.id===id)
    // newTasks[index].completed != newTasks[index].completed
    // setTasks([...newTasks])
    setTasks(tasks.map(task => {
      task.id === id ? {...task, completed: !task.completed} : task
    }))
  }

  return (
    <>
    <h1>Lista de tareas</h1>
    <ul>
      <li className='card'>
        <AddTaskForm addTask={addTask}/>
      </li>
      {tasks.map((task) => {
        return (
            <Task key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
          )
      })}
    </ul>
    </>
  );
};

export default App;
