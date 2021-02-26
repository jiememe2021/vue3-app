import axios from '../plugins/axios'

export function getUsers(){
  return axios.get('/users')
}