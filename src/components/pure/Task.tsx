import { ReactNode } from 'react';
import { TaskModel } from '../../types/types'
import '../../styles/task.scss'

interface Props extends TaskModel {
    handleDelete: Function
    handleEdit: Function
    handleToggleCompleted: Function
}

function renderLevelBadge(level: string): ReactNode {
    let badgeComponent: ReactNode = ''
    switch (level) {
        case 'NORMAL':
            badgeComponent =
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>{level}</span>
                </h6>
            break;
        case 'URGENT':
            badgeComponent =
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>{level}</span>
                </h6>
            break;
        case 'BLOCKING':
            badgeComponent =
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>{level}</span>
                </h6>
            break;
    }
    return badgeComponent
}

function Task({ completed, description, handleDelete, handleEdit, handleToggleCompleted, id, name, level }: Props) {

    const taskCompletedStyle = completed ? { textDecoration: 'line-through' } : {}

    return (
        <tr className='fw-normal' style={taskCompletedStyle}>
            <td>
                <span>{name}</span>
            </td>
            <td>
                <span>{description}</span>
            </td>
            <td>
                {renderLevelBadge(level)}
            </td>
            <td>
                <div className="btn-group">
                    <button type="button" className="btn btn-outline-secondary" onClick={() => { handleToggleCompleted(id) }}>
                        {completed ? <i className="bi bi-check-circle"></i> : <i className="bi bi-circle"></i>}
                        <span className="visually-hidden">Button</span>
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => { handleDelete(id) }}>
                        <i className="bi bi-trash"></i>
                        <span className="visually-hidden">Button</span>
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => { handleEdit(id) }}>
                        <i className="bi bi-pencil-square"></i>
                        <span className="visually-hidden">Button</span>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export { Task } 