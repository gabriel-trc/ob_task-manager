import { useState } from 'react'
import { Task } from "../pure/Task"
import { ModalTask } from "../pure/forms/ModalTask";
import { TaskModel } from "../../types/types"


interface Props {
    tasks: Array<TaskModel>
    setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>
}


function TaskList({ tasks, setTasks }: Props) {
    const [taskInModal, setTaskInModal] = useState<TaskModel>({ name: '', level: 'NORMAL' })
    const [showTaskModal, setShowTaskModal] = useState(false)

    function handleOpenModalTask() {
        setShowTaskModal(true)
    }

    function handleCloseModalTask({ editedTask }: { editedTask?: TaskModel }) {
        if (editedTask) {
            const _tasks = editedTask.id ? tasks.map(e => e.id === editedTask.id ? editedTask : { ...e }) : [...tasks, editedTask]
            setTasks(_tasks)
        }
        setShowTaskModal(false)
    }

    function handleDelete(taskId: number): void {
        setTasks(prevState => prevState.filter(task => task.id !== taskId))
    }

    function handleEdit(taskId: number): void {
        const taskToEdit = tasks.find(e => e.id === taskId)
        if (taskToEdit) {
            setTaskInModal(taskToEdit)
            handleOpenModalTask()
        }
    }

    function handleToggleCompleted(taskId: number): void {
        setTasks(prevState => prevState.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task))
    }

    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
            </ul>

            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">Login</button>
                <button type="button" className="btn btn-primary">Sign-up</button>
            </div>
        </header>
    )
}

export { TaskList }