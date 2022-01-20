import { useEffect, useState } from "react"
import { Container, Spinner, Alert } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Layout from "../../components/Layout"
import InscriptionForm from "./InscriptionForm"
import Inscriptions from "./Inscriptions"
import NotFoundView from '../NotFound'

function CourseDetailView() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [course, setCourse] = useState()
    const [generalError, setGeneralError] = useState()
    useEffect(()=> {
         const fetchCourse = async() => {
             try {
                setLoading(true)
                const response = await fetch(`http://localhost:3001/courses/${id}?_embed=inscriptions`)
                if(response.status === 404) {
                    throw new Error ('404')
                }
                console.log(response)
                const data = await response.json()
                console.log(data)
                setCourse(data)
                setLoading(false)
             } catch (error) {
                const message = error.message === '404'
                ? '404'
                : 'Falha ao buscar informações do curso. Recarregue a página'
                setGeneralError(message)                
                setLoading(false)
                console.log('deu erro')
             }
         }
         fetchCourse()
    }, [id])
    if (loading) {
        return (
            <div className = "text-center mt-4">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        ) 
    }
    if(generalError === '404') {
        return <NotFoundView />
    }
    return (
        <Layout>
            <Container>
                {generalError ? (
                    <Alert>{generalError}</Alert>
                ) : (
                    <>
                        <h1 className="text-center mt-4">{course.name}</h1>
                        <p><strong>Coordenador: </strong>{course.coordinator}</p>
                        <p>{course.description}</p>
                        <Inscriptions items={course.inscriptions}/>
                        <InscriptionForm />
                    </>
                )}
                
            </Container>
        </Layout>
    )
}

export default CourseDetailView