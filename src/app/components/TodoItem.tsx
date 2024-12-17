import type { Todo, TodoCategory } from '@/app/types'

interface TodoItemProps {
    todo: Todo
    onToggle: (id: string) => void
    onDelete: (id: string) => void
    onUpdateCategory: (id: string, category: TodoCategory) => void
    showCategory: boolean
}

export const TodoItem = ({
    todo,
    onToggle,
    onDelete,
    onUpdateCategory,
    showCategory,
}: TodoItemProps) => {
    return (
        <div className="flex flex-wrap items-center gap-3 p-3 border rounded-lg bg-white">
            <div className="flex items-center gap-3 min-w-0 flex-1">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="h-5 w-5 flex-shrink-0"
                />
                <span
                    className={`${todo.completed ? 'line-through text-gray-500' : ''}`}
                >
                    {todo.text}
                </span>
                <button
                    type="button"
                    onClick={() => onDelete(todo.id)}
                    className="ml-auto flex-shrink-0 px-3 py-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 text-sm"
                >
                    Delete
                </button>
            </div>
            {showCategory && (
                <select
                    value={todo.category}
                    onChange={(e) =>
                        onUpdateCategory(
                            todo.id,
                            e.target.value as TodoCategory,
                        )
                    }
                    className="flex-shrink-0 px-3 py-1.5 border rounded-lg text-sm w-full sm:w-auto"
                >
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="shopping">Shopping</option>
                    <option value="other">Other</option>
                </select>
            )}
        </div>
    )
}
