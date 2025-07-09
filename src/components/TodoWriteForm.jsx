function TodoWriteForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const value = form.todo.value.trim()
        if (!value) return
        addTodo(value)
        form.reset()
    }

    return (
        <form
            onSubmit={handleOnSubmit}
            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow border border-gray-200"
        >
            <input
                type="text"
                name="todo"
                placeholder="할 일을 입력하세요"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
            >
                등록
            </button>
        </form>
    )
}

export default TodoWriteForm
