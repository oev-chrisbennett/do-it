export interface Todo {
    id: UUID
    text: string
    completed: boolean
    createdAt: string
}

type UUID = `${string & { length: 8 }}-
    ${string & { length: 4 }}-
    ${string & { length: 4 }}-
    ${string & { length: 4 }}-
    ${string & { length: 12 }}`
