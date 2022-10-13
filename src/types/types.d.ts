interface ModalTaskProps {
    handleClose?: Function
    task:TaskModel
    show: boolean
}

interface TaskModel {
    completed?: boolean
    description?: string
    id?: number
    name: string
    level: 'NORMAL' | 'URGENT' | 'BLOCKING'
}



export { ModalTaskProps, TaskModel }