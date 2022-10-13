import React, { useState } from 'react'

interface Props {
    password: string
    user: string
}


function Login({ password, user }: Props) {

    const [credentials, setCredentials] = useState<Props>({ password, user })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>):void {
        const { name, value } = event.target
        setCredentials({ ...credentials, [name]: value })
    }

    return (
        <div>
            <label>User:
                <input name='user' onChange={handleChange} type='text' value={credentials.user} />
            </label>
            <label>
                Password:
                <input name='user' onChange={handleChange} type='password' value={credentials.password} />
            </label>
        </div>
    )
}

export { Login } 