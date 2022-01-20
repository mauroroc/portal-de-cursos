import { useEffect, useState } from "react"
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap"
import CardCourse from "../../components/CardCourse"
import Layout from "../../components/Layout"

function CoursesView () {
    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState([])
    const [generalError, setGeneralError]  =useState()
    useEffect(()=>{
        fetch('http://localhost:3001/courses')
            .then(response=> response.json())
            .then(data=> {
                setCourses(data)
            })
            .catch(()=> {
                setGeneralError('Não foi possível buscar os cursos. Recarregue a página.')
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [])
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Cursos</h1>
                {generalError && (
                    <Alert variant="danger">{generalError}</Alert>
                )}
                {loading ? (
                    <div className = "text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <Row>
                        {courses.map((item) => (
                            <Col key={item.id} className="grid-courses-item mb-3" xs={6} md={4} lg={3}>
                                <CardCourse course={item} />
                            </Col>
                        ))}                  
                    </Row>
                )}
            </Container>
        </Layout>
    )
}

export default CoursesView