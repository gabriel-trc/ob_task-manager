import React, { useState } from 'react'

interface Props {
    email: string
    name: string
    password: string
    user: string
}


function Register({ email, name, password, user }: Props) {

    const [registerData, setCredentials] = useState<Props>({ email, name, password, user })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target
        setCredentials({ ...registerData, [name]: value })
    }

    return (
        <div>
            <label>Name:
                <input name='name' onChange={handleChange} type='text' value={registerData.name} />
            </label>
            <label>Email:
                <input name='email' onChange={handleChange} type='text' value={registerData.email} />
            </label>
            <label>User:
                <input name='user' onChange={handleChange} type='text' value={registerData.user} />
            </label>
            <label>
                Password:
                <input name='user' onChange={handleChange} type='password' value={registerData.password} />
            </label>
        </div>
    )
}

export { Register } 