export type TodoCategory = 'work' | 'personal' | 'shopping' | 'other'
export interface Todo {
    id: string
    text: string
    completed: boolean
    createdAt: string
    category: TodoCategory
}

export type SortOption = 'createdAt' | 'alphabetical' | 'category'
export type FilterOption = 'all' | 'active' | 'completed' | TodoCategory
