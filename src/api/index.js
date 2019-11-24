import axios from 'axios'

const axiosClient = () => {
  const client = axios.create()

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        return Promise.reject({ errors: ['Connection error'] })
      }

      return Promise.reject(error.response)
    }
  )

  return client
}

export default axiosClient
