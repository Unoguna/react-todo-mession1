import TodoWriteForm from './components/TodoWriteForm'
import TodoList from './components/TodoList'
import { useTodos } from './hooks/useTodos'

function App() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos()

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-xl mx-auto px-4 pt-20">
                <h1 className="text-white bg-blue-500 p-3 rounded text-center font-semibold">MY TODO LIST</h1>
                <TodoWriteForm addTodo={addTodo} />
                <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            </div>
        </div>
    )
}

export default App
