function Task({ task, markAsCompleted, deleteTask }) {
    const {id, text, completed} = task
    return(
        <>
        <li className="card">
            <h3 onClick={() => markAsCompleted(id)} 
            style={completed ? {textDecoration:'line-through'} : {textDecoration:'none'}}>
                {text}
            </h3>
            <button onClick={() => deleteTask(id)}>Borrar</button>
        </li>
        </>
    )
}

export default Task