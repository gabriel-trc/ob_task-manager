import React, { useState } from 'react'
import { UserModel } from '../../../types/types'


function Register({ email, password, role, userName }: UserModel) {

    const [registerData, setRegisterData] = useState<UserModel>({ email, password, role, userName })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target
        setRegisterData({ ...registerData, [name]: value })
    }

    return (
        <form className="d-flex flex-column">
            <label className='form-label'>Username:
                <input name='name' className='form-control' onChange={handleChange} type='text' value={registerData.userName} />
            </label>
            <label className='form-label'>Email:
                <input name='email' className='form-control' onChange={handleChange} type='text' value={registerData.email} />
            </label>
            {/* <label className='form-label'>Role:
                <input name='user' className='form-control' onChange={handleChange} type='text' value={registerData.role} />
            </label> */}
            <label className='form-label'>
                Password:
                <input name='user' className='form-control' onChange={handleChange} type='password' value={registerData.password} />
            </label>
        </form>
    )
}

export { Register } 