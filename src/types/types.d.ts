interface ModalTaskProps {
    handleClose?: Function
    task: TaskModel
    show: boolean
}

interface TaskModel {
    completed?: boolean
    description?: string
    id?: number
    name: string
    level: 'NORMAL' | 'URGENT' | 'BLOCKING'
}

interface UserModel {
    email: string
    password:string
    role: 'USER' | 'ADMIN' 
    userName: string
}

interface LoaderProps {
    text: string
}


export { LoaderProps, ModalTaskProps, UserModel, TaskModel }