import axios from '../plugins/axios'

const baseUrl = process.env.NODE_ENV === 'development' ? '/api' : ''

export function getUsers(){
  return axios.get(baseUrl + '/users')
}


export function getEmr(){
  return axios.get(baseUrl + '/emr')
}