import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import CardCourse from "../../components/CardCourse"
import Layout from "../../components/Layout"

function CoursesView () {
    const[courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/courses')
            .then(response=> response.json())
            .then(data=>setCourses(data))
    }, [])
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Cursos</h1>
                <Row>
                    {courses.map((item) => (
                        <Col key={item.id} className="grid-courses-item mb-3" xs={6} md={4} lg={3}>
                            <CardCourse course={item} />
                        </Col>
                    ))}                  
                </Row>
            </Container>
        </Layout>
    )
}

export default CoursesView