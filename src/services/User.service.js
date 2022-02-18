import { apiUrl } from "./Api.service"

export const login = async (loginData) => {
  const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
          'Content-Type': 'application/json'
      }
  }) 
  if (!response.ok) {     
    const error = await response.json()
    const message =  error === 'Incorrect password' || error === 'Cannot find user'
      ? 'Erro ao logar.'
      : 'Response not OK.'
      throw new Error (message)
  }   
}