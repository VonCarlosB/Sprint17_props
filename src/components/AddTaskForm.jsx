function AddTaskForm() {
    <>
        <form onSubmit={(e) => {
            e.preventDefault()
            
        }}>
            <label>Tarea: </label>
            <input></input>
            <button>Añadir tarea</button>
        </form>
    </>
}

export default AddTaskForm