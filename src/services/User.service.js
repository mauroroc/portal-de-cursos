import { apiUrl } from "./Api.service"
import { removeStorageItem, setStorageItem } from "./Storage.service"

export const login = async (loginData) => {
  const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
          'Content-Type': 'application/json'
      }
  }) 
  const data = await response.json()  
  if (!response.ok) {     
    const message =  data === 'Incorrect password' || data === 'Cannot find user'
      ? 'Erro ao logar.'
      : 'Response not OK.'
      throw new Error (message)
  } 
  return proccessLoginResponse(data)
}

export const logout = () => {
  removeStorageItem('user')
}

export const createUser = async (userData) => {
  const body = {
    ...userData,
    type: 2,
  }
  const response = await fetch(`${apiUrl}/users`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          'Content-Type': 'application/json'
      }
  }) 
  const data = await response.json()
  if (!response.ok) {
    const message = typeof data === 'string' ? data : 'Response not OK.' 
    throw new Error(message)
  }
  return proccessLoginResponse(data)
}

const proccessLoginResponse = (data) => {
  const userdata = {
    acessToken: data.acessToken,
    ...data.user
  }
  setStorageItem('user', JSON.stringify(userdata))  
  return userdata
}