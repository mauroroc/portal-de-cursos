import { useCallback, useEffect, useState } from "react"
import { Container, Spinner, Alert } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Layout from "../../components/Layout"
import InscriptionForm from "./InscriptionForm"
import Inscriptions from "./Inscriptions"
import NotFoundView from '../NotFound'
import { getCourseById } from "../../services/Courses.service"

function CourseDetailView() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [course, setCourse] = useState()
    const [generalError, setGeneralError] = useState()
    const fetchCourse = useCallback(
        async() => {
            try {
               const data = await getCourseById(id)
               setCourse(data)
               setLoading(false)
            } catch (error) {
               const message = error.message === 'Response not OK.'
               ? '404'
               : 'Falha ao buscar informações do curso. Recarregue a página'
               setGeneralError(message)                
               setLoading(false)
            }
        }, 
        [id]
    )
    useEffect(()=> {
        setLoading(true)
        fetchCourse()
    }, [fetchCourse])
    const handleOnRegister = () => {
        fetchCourse()
    }
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
                        <InscriptionForm courseId={id} onRegister={handleOnRegister} />
                    </>
                )}
                
            </Container>
        </Layout>
    )
}

export default CourseDetailView