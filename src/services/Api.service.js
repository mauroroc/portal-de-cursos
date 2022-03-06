import { store } from "../store/store"
import { selectUser } from "../store/User/User.selectors"

export const apiUrl = process.env.REACT_APP_API_URL

export const getAuthorizationHeader = () => {
  const {accessToken} = selectUser(store.getState())
  return {            
    'Authorization': `Bearer ${accessToken}`
  } 
}