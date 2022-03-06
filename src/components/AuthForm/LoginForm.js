import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login } from "../../services/User.service"
import { userLogin } from "../../store/User/User.actions"

export function LoginForm() {
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (event) => {
    const newFormData = {
        ...formData
    }
    newFormData[event.target.name] = event.target.value
    setFormData(newFormData)
  } 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit= async (event) => {
    event.preventDefault()
    try {
      setIsSubmiting(true)
      const userData = await(login(formData))                 
      dispatch(userLogin(userData) )
      navigate('/portal')      
    } catch (error) {
      const message = error.message === "Erro ao logar." ? "Login ou senha inválido" : "Falha no login."
      toast.error(message)
      setIsSubmiting(false)
    }    
  }
  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="login-email">
                    <Form.Label className="mb-0">Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Informe seu email" 
                        value={formData.email}
                        name='email'
                        onChange={handleChange}
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="login-password">
                    <Form.Label className="mb-0">Senha</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Informe sua senha" 
                        value={formData.password}
                        name='password'
                        onChange={handleChange}
                        required />
                </Form.Group>
                <Button type="submit" disabled={isSubmiting}>{isSubmiting ? "Enviando" : "Logar"}</Button>
            </Form> 
    </>
  )
}