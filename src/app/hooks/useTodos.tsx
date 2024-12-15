import { storage } from '@/app/lib/storage'
import type { Todo } from '@/app/types'
import { useEffect, useState } from 'react'

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        setTodos(storage.getTodos())
    }, [])

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            createdAt: new Date().toISOString(),
        }
        const updatedTodos = [...todos, newTodo]
        setTodos(updatedTodos)
        storage.setTodos(updatedTodos)
    }

    const toggleTodo = (id: string) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        )
        setTodos(updatedTodos)
        storage.setTodos(updatedTodos)
    }

    const deleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
        storage.setTodos(updatedTodos)
    }

    return { todos, addTodo, toggleTodo, deleteTodo }
}
