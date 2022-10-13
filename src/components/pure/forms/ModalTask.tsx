import { useState } from 'react';
import { createPortal } from 'react-dom';
import { TaskModel } from '../../../types/types'


function ModalTask({ task, handleCloseModalTask }: { task: TaskModel, handleCloseModalTask: Function }) {
    const [editedTask, setEditedTask] = useState<TaskModel>(task)

    function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>): void {
        const { name, value } = event.target
        setEditedTask({ ...editedTask, [name]: value })
    }

    const onClickCloseModal = (save: boolean) => {
        if (save) {
            const id = Math.floor(Math.random() * 1000)
            handleCloseModalTask({ ...editedTask, id, completed: false })
        } else {
            handleCloseModalTask({})
        }
    }

    return createPortal(
        <div className="modal fade show" tabIndex={-1} style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Task form</h1>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => { onClickCloseModal(false) }}></button>
                    </div>
                    <div className="modal-body">
                        <form className="d-flex flex-column">
                            <label className='form-label'>Name:
                                <input name='name' className='form-control' onChange={handleChange} type='text' value={editedTask.name} />
                            </label>
                            <label className='form-label'>Description:
                                <textarea name='description' className='form-control' onChange={handleChange} value={editedTask.description} />
                            </label>
                            <label className='form-label'>Level:
                                <select name='level' className='form-control' onChange={handleChange} value={editedTask.level}>
                                    <option value='NORMAL'>Normal</option>
                                    <option value='URGENT'>Urgent</option>
                                    <option value='BLOCKING'>Blocking</option>
                                </select>
                            </label>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => { onClickCloseModal(false) }}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => { onClickCloseModal(true) }}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal') as Element
    );
}

export { ModalTask };