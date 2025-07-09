function TodoItem({ todo, removeTodo, toggleTodo }) {
    return (
        <li
            key={todo.id}
            className="flex items-center justify-between bg-white shadow-sm rounded-lg px-4 py-2 mb-2 border border-gray-200"
        >
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-500 accent-blue-500"
                    onChange={() => toggleTodo(todo.id)}
                    checked={todo.checked}
                />
                <span className={`text-lg ${todo.checked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-500 hover:text-white hover:bg-red-500 border border-red-300 rounded px-2 py-1 text-sm transition-all"
            >
                삭제
            </button>
        </li>
    )
}

export default TodoItem
