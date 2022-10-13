import { TaskModel } from '../types/types'

class Task {
    completed: boolean
    description?: string
    id?: number
    name: string
    level: 'NORMAL' | 'URGENT' | 'BLOCKING'

    constructor({ completed, description, id, name, level }: TaskModel) {
        this.completed = completed ?? false
        this.description = description ?? ''
        this.id = id
        this.name = name
        this.level = level ?? 'NORMAL'
    }
}

export { Task }