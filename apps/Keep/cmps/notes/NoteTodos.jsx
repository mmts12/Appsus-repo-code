export function NoteTodos({ info, onDone }) {


    return (
        <div className="todo-card">
            <h1>{info.title}</h1>
            {info.todos.map((todo, idx) => {
                return <li key={idx} className={`clean-list ${todo.isDone ? 'checked' : ''}`} onClick={() => onDone(todo, info)}>
                    {todo.txt}
                </li>
            })}
        </div>
    )
}

