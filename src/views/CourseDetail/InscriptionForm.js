import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function InscriptionForm () {
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
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
                        value={name}
                        onChange={(event) => setName(event.target.value)} 
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inscription-email">
                    <Form.Label className="mb-0">Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Informe seu email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inscription-password">
                    <Form.Label className="mb-0">Senha</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Informe sua senha" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required />
                </Form.Group>
                <Button type="submit">Inscrever</Button>
            </Form> 
        </>
    )
}

export default InscriptionForm