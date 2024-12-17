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
        settings,
        toggleControls,
        toggleCategories,
    } = useTodos()

    return (
        <main className="min-h-screen bg-slate-200">
            <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                        To-Do ✅
                    </h1>
                    <TodoForm onAdd={addTodo} />
                    <Controls
                        sortBy={sortBy}
                        filterBy={filterBy}
                        onSortChange={setSortBy}
                        onFilterChange={setFilterBy}
                        showControls={settings.showControls}
                        onToggleControls={toggleControls}
                        showCategories={settings.showCategories}
                        onToggleCategories={toggleCategories}
                    />
                    <div className="mt-8 space-y-3">
                        {todos.length === 0 ? (
                            <p className="text-center text-gray-500 py-8">
                                No todos yet. Add one above!
                            </p>
                        ) : (
                            todos.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onToggle={toggleTodo}
                                    onDelete={deleteTodo}
                                    onUpdateCategory={updateCategory}
                                    showCategory={settings.showCategories}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
