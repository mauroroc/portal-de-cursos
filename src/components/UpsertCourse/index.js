import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const emptyState= {
  name: '',
  coordinator: '',
  shortDescription: '',
  description: ''
}

export function UpsertCourse({onSubmit, buttonLabel = 'Salvar', initialState = emptyState}) {
  const [formData, setFormData] = useState(initialState)

  const handleChange = (event) => {
    const { value,name } = event.target    
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="course-name">
        <Form.Label className="mb-0">Nome</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Nome do Curso" 
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Form.Label className="mb-0">Coordenador</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Coordenador do Curso" 
          required
          name="coordinator"
          value={formData.coordinator}
          onChange={handleChange}
        />
        <Form.Label className="mb-0">Descrição Curta</Form.Label>
        <Form.Control 
          as='textarea'          
          placeholder="texto que aparece na listagem dos cursos" 
          required
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
        />
        <Form.Label className="mb-0">Descrição Longa</Form.Label>
        <Form.Control 
          as='textarea'          
          placeholder="texto que aparece no detalhe dos cursos" 
          required
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type='submit'>{buttonLabel}</Button>
    </Form>
  )
}