import type { FilterOption, SortOption } from '@/app/types'

interface ControlsProps {
    sortBy: SortOption
    filterBy: FilterOption
    onSortChange: (sort: SortOption) => void
    onFilterChange: (filter: FilterOption) => void
}

export const Controls = ({
    sortBy,
    filterBy,
    onSortChange,
    onFilterChange,
}: ControlsProps) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 my-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
                <label htmlFor="sortSelect" className="font-medium">
                    Sort by:
                </label>
                <select
                    id="sortSelect"
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value as SortOption)}
                    className="p-2.5 border rounded-lg flex-1 sm:max-w-[200px]"
                >
                    <option value="createdAt">Date Created</option>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="category">Category</option>
                </select>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
                <label htmlFor="filterSelect" className="font-medium">
                    Filter:
                </label>
                <select
                    id="filterSelect"
                    value={filterBy}
                    onChange={(e) =>
                        onFilterChange(e.target.value as FilterOption)
                    }
                    className="p-2.5 border rounded-lg flex-1 sm:max-w-[200px]"
                >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="shopping">Shopping</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
    )
}
