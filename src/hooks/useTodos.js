import { useState, useRef, useEffect } from 'react'
import { getItem, setItem } from '../utils/storage'

export function useTodos() {
    const [todos, setTodos] = useState(() => {
        const saved = getItem('todos')
        return (
            saved ?? [
                { id: 3, text: '공부하기', checked: true },
                { id: 2, text: '코딩하기', checked: false },
                { id: 1, text: '운동하기', checked: true },
            ]
        )
    })

    const lastId = useRef(todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1)

    useEffect(() => {
        setItem('todos', todos)
    }, [todos])

    const addTodo = (text) => {
        const todo = { id: lastId.current++, text, checked: false }
        setTodos([todo, ...todos])
    }

    const removeTodo = (seletedId) => {
        const filterTodos = todos.filter((todo) => todo.id != seletedId)
        setTodos(filterTodos)
    }

    const toggleTodo = (seletedId) => {
        const updateTodos = todos.map((todo) => (todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
    }

    return { todos, addTodo, removeTodo, toggleTodo }
}
