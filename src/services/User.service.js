import { apiUrl } from "./Api.service"
import { setStorageItem } from "./Storage.service"

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
  const userdata = {
    acessToken: data.acessToken,
    ...data.user
  }
  setStorageItem('user', JSON.stringify(userdata))  
}