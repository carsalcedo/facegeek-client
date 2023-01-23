import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000"})

export const login = (formData) => API.post('/auth/login', formData) //solicitando API para el login
export const signUp = (formData) => API.post('/auth/register', formData) //solicitando API para el registro