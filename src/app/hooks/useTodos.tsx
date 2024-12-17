import { storage } from '@/app/lib/storage'
import type { FilterOption, SortOption, Todo, TodoCategory } from '@/app/types'
import { useEffect, useMemo, useState } from 'react'

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [sortBy, setSortBy] = useState<SortOption>('createdAt')
    const [filterBy, setFilterBy] = useState<FilterOption>('all')

    useEffect(() => {
        setTodos(storage.getTodos())
    }, [])

    const addTodo = (text: string, category: TodoCategory) => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            createdAt: new Date().toISOString(),
            category,
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

    const updateCategory = (id: string, category: TodoCategory) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, category } : todo,
        )
        setTodos(updatedTodos)
        storage.setTodos(updatedTodos)
    }

    const filteredAndSortedTodos = useMemo(() => {
        let filtered = [...todos]

        if (filterBy === 'active') {
            filtered = filtered.filter((todo) => !todo.completed)
        } else if (filterBy === 'completed') {
            filtered = filtered.filter((todo) => todo.completed)
        } else if (filterBy !== 'all') {
            filtered = filtered.filter((todo) => todo.category === filterBy)
        }

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'alphabetical':
                    return a.text.localeCompare(b.text)
                case 'category':
                    return a.category.localeCompare(b.category)
                case 'createdAt':
                    return (
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                    )
                default:
                    return 0
            }
        })
    }, [todos, sortBy, filterBy])

    return {
        todos: filteredAndSortedTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        updateCategory,
        sortBy,
        setSortBy,
        filterBy,
        setFilterBy,
    }
}
