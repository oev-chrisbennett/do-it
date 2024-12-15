import type { Todo } from '@/app/types'

interface TodoItemProps {
    todo: Todo
    onToggle: (id: string) => void
    onDelete: (id: string) => void
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
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
