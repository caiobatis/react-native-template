import axios from 'axios'
import { API_BASE_URL } from 'react-native-dotenv'

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default client
