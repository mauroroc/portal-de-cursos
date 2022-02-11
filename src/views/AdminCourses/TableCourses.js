import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export function TableCourses({courses, onClickDelete}) {
  return (
    <Table striped hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Coordenador</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center">Nenhum curso cadastrado</td>
          </tr>
        ) : courses.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.coordinator}</td>
              <td className='d-grid gap-1 d-sm-table-cell'>
                <Button size='sm' as={Link} to={`/portal/cursos/${item.id}`}>Editar</Button>
                <Button size='sm' variant='danger' className="ms-sm-1" onClick={() => onClickDelete(item)}>Excluir</Button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  )
}