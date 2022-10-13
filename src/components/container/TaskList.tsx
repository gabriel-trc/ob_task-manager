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
        <>
            <div className="col-12">
                <div className="card">
                    <div className="card-header p3 d-flex">
                        <h1>Your tasks</h1>
                        <button type="button" className="btn btn-primary" onClick={handleOpenModalTask}>
                            <i className="bi bi-plus-circle"></i>
                            Add
                        </button>
                    </div>
                    <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "500px" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map(task => {
                                        return (<Task key={task.id} {...task} handleDelete={handleDelete} handleEdit={handleEdit} handleToggleCompleted={handleToggleCompleted} />)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {showTaskModal && <ModalTask task={taskInModal} handleCloseModalTask={handleCloseModalTask} />}
        </>
    )
}

export { TaskList }