'use client'

import { Controls } from '@/app/components/Controls'
import { TodoForm } from '@/app/components/TodoForm'
import { TodoItem } from '@/app/components/TodoItem'
import { useTodos } from '@/app/hooks/useTodos'

export default function Home() {
    const {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        updateCategory,
        sortBy,
        setSortBy,
        filterBy,
        setFilterBy,
    } = useTodos()

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    To-Do ✅
                </h1>
                <TodoForm onAdd={addTodo} />
                <Controls
                    sortBy={sortBy}
                    filterBy={filterBy}
                    onSortChange={setSortBy}
                    onFilterChange={setFilterBy}
                />
                <div className="mt-8 space-y-3">
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                            onUpdateCategory={updateCategory}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
