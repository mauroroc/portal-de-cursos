import { Container, Row, Col } from "react-bootstrap"
import CardCourse from "../../components/CardCourse"
import Layout from "../../components/Layout"

const courses = [
    {
        id: 1,
        name: 'Curso de Javascript',
        shortDescription: 'Aprenda Javascript do básico ao avançado'
    },
    {
        id: 2,
        name: 'Curso de Java',
        shortDescription: 'Aprenda Java do básico ao avançado'
    },
    {
        id: 3,
        name: 'Curso de CSS',
        shortDescription: 'Aprenda CSS do básico ao avançado'
    },
    {
        id: 4,
        name: 'Curso de Ruby',
        shortDescription: 'Aprenda Ruby do básico ao avançado'
    },
    {
        id: 5,
        name: 'Curso de DotNet',
        shortDescription: 'Aprenda DotNet do básico ao avançado'
    },
]

function CoursesView () {
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