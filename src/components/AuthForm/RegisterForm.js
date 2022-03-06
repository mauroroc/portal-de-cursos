import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createUser } from "../../services/User.service"
import { userLogin } from "../../store/User/User.actions"

export function RegisterForm ({ onRegister }) {    
    const [isSubmiting, setIsSubmiting] = useState(false)    
    const [formData, setFormData] = useState({
        name: '',
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

    const handleSubmit = async (event) => {        
        try{
            event.preventDefault()                        
            setIsSubmiting(true)
            const createdUserData = await createUser(formData)                                                
            const action = userLogin(createdUserData)
            dispatch(action)
            navigate('/portal')
        } catch (error) {
            if (error.message === 'Email already exist') {
                toast.error('Este e-mail ja está em uso')
            } else {
                toast.error('Falha ao fazer o cadastro')
            } 
            setIsSubmiting(false)           
        }           
    }
    return (
        <>
            <h2>Cadastre-se</h2>            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="inscription-name">
                    <Form.Label className="mb-0">Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Informe seu nome"
                        value={formData.name}
                        name='name'
                        onChange={handleChange} 
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inscription-email">
                    <Form.Label className="mb-0">Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Informe seu email" 
                        value={formData.email}
                        name='email'
                        onChange={handleChange}
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inscription-password">
                    <Form.Label className="mb-0">Senha</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Informe sua senha" 
                        value={formData.password}
                        name='password'
                        onChange={handleChange}
                        minLength={4}
                        required />
                </Form.Group>
                <Button type="submit" disabled={isSubmiting}>{isSubmiting ? "Enviando" : "Inscrever"}</Button>
            </Form> 
        </>
    )
}

