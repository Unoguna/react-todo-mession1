import TodoItem from './TodoItem'

function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <ul className="mt-6 max-h-96 overflow-y-auto px-4">
            {todos.length === 0 ? (
                <li className="text-center text-gray-400 text-sm py-6">할 일이 없습니다.</li>
            ) : (
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                ))
            )}
        </ul>
    )
}

export default TodoList
