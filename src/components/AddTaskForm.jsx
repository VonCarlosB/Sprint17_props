import { useState } from "react"

function AddTaskForm({ addTask }) {
    const [text, setText] = useState('')
    return (<>
        <form onSubmit={(e) => {
            e.preventDefault()
            addTask(text)
        }}>
            <input type='text' placeholder='Nueva tarea' value={text} onChange={(e) => {
                setText(e.target.value)
            }}></input>
            <button type='submit'>Añadir tarea</button>
        </form>
    </>)
}

export default AddTaskForm