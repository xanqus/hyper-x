import axios from 'axios'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
const instance = axios.create({
  baseURL: 'http://localhost:8287',
  timeout: 1000,
})

instance.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    config.headers['Authorization'] = localStorage.getItem('login-token')
    return config
  },
  e => {
    console.log(e)
    return Promise.reject(e)
  }
)

instance.interceptors.response.use(
  res => {
    console.log('res', res)
    return res.data.data
  },
  e => {
    console.log('응답 에러', e)
    return Promise.reject(e)
  }
)

export default instance