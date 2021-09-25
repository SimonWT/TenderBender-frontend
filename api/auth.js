import { api } from './'

export function login(email, password){
    return api.post('/auth', { email, password })
}