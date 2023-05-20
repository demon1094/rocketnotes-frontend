import axios from 'axios'

export const api = axios.create({
  baseURL: "https://rocketnotes-backend-9rj0.onrender.com"
})