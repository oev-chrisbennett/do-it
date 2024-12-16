import { useState } from 'react'

interface TodoFormProps {
    onAdd: (text: string) => void
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
    const [text, setText] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!text.trim()) return
        onAdd(text)
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
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Add
            </button>
        </form>
    )
}
