import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function CardCourse({ course }) {
    return (
        <Card as='article' className="text-center shadow card-course">
            <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>{course.shortDescription}</Card.Text>
                <Button as={Link} to={`/cursos/${course.id}`}>Ver Mais</Button>
            </Card.Body>
        </Card>
    )
}

export default CardCourse