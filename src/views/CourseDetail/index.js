import { Container } from "react-bootstrap"
import Layout from "../../components/Layout"
import InscriptionForm from "./InscriptionForm"
import Inscriptions from "./Inscriptions"

const course = {
    id: 1,
    name: 'Curso de Javascript',
    shortDescription: 'Aprenda Javascript do básico ao avançado',
    coordinator: 'Cristiano Neto',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    inscriptions: 
    [
        {
            id: 1,
            name: 'Mauro',
            email: 'mauror@mauror.com.br',
        },
        {
            id: 2,
            name: 'Rocha',
            email: 'mauro.rocha@saiteria.com.br',
        }
    ]

}


function CourseDetailView() {
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">{course.name}</h1>
                <p><strong>Coordenador: </strong>{course.coordinator}</p>
                <p>{course.description}</p>
                <Inscriptions items={course.inscriptions}/>
                <InscriptionForm />
            </Container>
        </Layout>
    )
}

export default CourseDetailView