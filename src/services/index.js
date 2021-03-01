import axios from '../plugins/axios'

export function getUsers(){
  return axios.get('/users')
}


export function getEmr(){
  return axios.get('/emr')
}