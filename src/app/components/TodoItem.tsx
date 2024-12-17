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
        <div className="flex items-center gap-3 p-3 border rounded-lg bg-white">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="h-5 w-5"
            />
            <span
                className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
                {todo.text}
            </span>
            <select
                value={todo.category}
                onChange={(e) =>
                    onUpdateCategory(todo.id, e.target.value as TodoCategory)
                }
                className="px-2 py-1 border rounded-lg"
            >
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="shopping">Shopping</option>
                <option value="other">Other</option>
            </select>
            <button
                type="button"
                onClick={() => onDelete(todo.id)}
                className="text-red-500 hover:text-red-700"
            >
                Delete
            </button>
        </div>
    )
}
