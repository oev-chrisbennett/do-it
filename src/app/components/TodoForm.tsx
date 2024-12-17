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
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 p-2 border rounded-lg"
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value as TodoCategory)}
                className="p-2 border rounded-lg"
            >
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="shopping">Shopping</option>
                <option value="other">Other</option>
            </select>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Add
            </button>
        </form>
    )
}
