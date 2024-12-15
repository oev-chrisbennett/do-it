import type { Todo } from '@/app/types'

export const storage = {
    getTodos: (): Todo[] => {
        if (typeof window === 'undefined') return []
        const saved = localStorage.getItem('todos')
        return saved ? JSON.parse(saved) : []
    },

    setTodos: (todos: Todo[]): void => {
        if (typeof window === 'undefined') return
        localStorage.setItem('todos', JSON.stringify(todos))
    },
}
