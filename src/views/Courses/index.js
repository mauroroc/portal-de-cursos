import { useEffect, useState } from "react"
import { Container, Row, Col, Alert } from "react-bootstrap"
import CardCourse from "../../components/CardCourse"
import Layout from "../../components/Layout"
import { getCourses } from "../../services/Courses.service"
import { Loading } from "../../components/Loading";

function CoursesView () {
    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState([])
    const [generalError, setGeneralError]  =useState()
    useEffect(()=>{
        const fectchCourses = async () => {
            try {
                const data = await getCourses()
                setCourses(data)
            } catch (error) {
                setGeneralError('Não foi possível buscar os cursos. Recarregue a página.')
            }
            setLoading(false)
        }
        fectchCourses()
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
                        <Loading />
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