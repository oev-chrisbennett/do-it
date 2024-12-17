import type { TodoCategory } from '@/app/types'
import { useState } from 'react'

interface TodoFormProps {
    onAdd: (text: string, category: TodoCategory) => void
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
    const [text, setText] = useState('')
    const [category, setCategory] = useState<TodoCategory>('other')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!text.trim()) return
        onAdd(text, category)
        setText('')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
        >
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 p-3 border rounded-lg"
            />
            <div className="flex gap-2">
                <select
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value as TodoCategory)
                    }
                    className="p-3 border rounded-lg min-w-[120px]"
                >
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="shopping">Shopping</option>
                    <option value="other">Other</option>
                </select>
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 whitespace-nowrap"
                >
                    Add Todo
                </button>
            </div>
        </form>
    )
}
