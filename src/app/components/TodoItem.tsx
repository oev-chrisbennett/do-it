import type { Todo, TodoCategory } from '@/app/types'

interface TodoItemProps {
    todo: Todo
    onToggle: (id: string) => void
    onDelete: (id: string) => void
    onUpdateCategory: (id: string, category: TodoCategory) => void
}

export const TodoItem = ({
    todo,
    onToggle,
    onDelete,
    onUpdateCategory,
}: TodoItemProps) => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 border rounded-lg bg-white">
            <div className="flex items-center gap-3 w-full sm:w-auto">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="h-5 w-5 flex-shrink-0"
                />
                <span
                    className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
                >
                    {todo.text}
                </span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                <select
                    value={todo.category}
                    onChange={(e) =>
                        onUpdateCategory(
                            todo.id,
                            e.target.value as TodoCategory,
                        )
                    }
                    className="px-3 py-1.5 border rounded-lg text-sm flex-1 sm:flex-none"
                >
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="shopping">Shopping</option>
                    <option value="other">Other</option>
                </select>
                <button
                    type="button"
                    onClick={() => onDelete(todo.id)}
                    className="px-3 py-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 text-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
