import axios from 'axios'

// Crear instancia base
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Interceptor para solicitudes
apiClient.interceptors.request.use(
  config => {
    // Obtener token de autenticación del almacenamiento
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

// Interceptor para respuestas
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Manejar errores (401, 404, etc)
    if (error.response && error.response.status === 401) {
      // Redirigir a login o renovar token
    }
    return Promise.reject(error)
  }
)

export default apiClient