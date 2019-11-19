import axios from 'axios'
import { API_URL } from '@/config'
// import { Notifications } from 'element-ui'

const request = axios.create({
  baseURL: API_URL,
  withCredentials: false
})

request.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

request.defaults.headers.common['Authorization'] =
  (localStorage.getItem('access_token') !== null) ? ('Bearer ' + localStorage.getItem('access_token')) : '';

request.interceptors.response.use(
  response => {
    return response
  },
  errors => {
    return errors
  }
)

export default request
