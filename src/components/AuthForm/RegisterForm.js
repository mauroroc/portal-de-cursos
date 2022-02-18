import { useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
//import { createInscription} from "../../services/Inscriptions.service.js"

const initialValue = {
        name: '',
        email: '',
        password: ''
}

export function RegisterForm ({ courseId, onRegister }) {
    const [generalError, setGeneralError] = useState()
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [showSuccess, setShowSucces] = useState(false)
    const [formData, setFormData] = useState(initialValue)

    const handleChange = (event) => {
        const newFormData = {
            ...formData
        }
        newFormData[event.target.name] = event.target.value
        setFormData(newFormData)
    }

    const handleSubmit = async (event) => {
        try{
            event.preventDefault()
            setGeneralError(undefined)
            setShowSucces(false)
            setIsSubmiting(true)
            //const body = {
            //    ...formData,
            //    courseId: parseInt(courseId)
            //}
            //await createInscription(body)
            
            setShowSucces(true)
            setFormData(initialValue)
            onRegister()
        } catch {
            setGeneralError('Falha ao realizar inscrição. Tente novamente.')
        }   
        setIsSubmiting(false)
    }
    return (
        <>
            <h2>Cadastre-se</h2>
            {generalError && (
                <Alert variant="danger">{generalError}</Alert>
            )}
            {showSuccess && (
                <Alert variant="success">Inscrito com sucesso.</Alert>
            )}
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
                        required />
                </Form.Group>
                <Button type="submit" disabled={isSubmiting}>{isSubmiting ? "Enviando" : "Inscrever"}</Button>
            </Form> 
        </>
    )
}

