import { UserModel } from '../types/types'

class User {
    email: string
    password: string
    role: 'USER' | 'ADMIN' 
    userName: string

    constructor({ email, password, role, userName }: UserModel) {
        this.email = email
        this.password =password
        this.role = role
        this.userName = userName

    }
}

export { User }