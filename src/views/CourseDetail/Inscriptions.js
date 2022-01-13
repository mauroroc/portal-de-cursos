import { Alert, Table } from "react-bootstrap"

function Inscriptions({ items }) {
    return (
        <>
            <h2>Alunos inscritos</h2>
            { items.length === 0 ? (
                <Alert>Nenhum aluno se inscreveu ainda</Alert>
             ) : ( 
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
             ) }
        </>
    )
}

export default Inscriptions