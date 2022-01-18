import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function InscriptionForm () {
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

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <>
            <h2>Formulário de Inscrição</h2>
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
                <Button type="submit">Inscrever</Button>
            </Form> 
        </>
    )
}

export default InscriptionForm