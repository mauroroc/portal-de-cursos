import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout'

function NotFoundView() {
  return (
    <Layout>
      <Container className="text-center mt-4">    
        <h1>Página não encontrada</h1>
        <p>A página que você está procurando não existe</p> 
      </Container>       
    </Layout>
  )
}

export default NotFoundView