import Layout from '../../components/Layout';
import { Button, Container } from 'react-bootstrap'
import Banner from '../../assets/img/banner.jpg'
import { Link } from 'react-router-dom'

function HomeView() {
    return (
      <Layout>      
          <Container>
            <div className='shadow border my-3 p-4 p-md-5 banner-home'>
              <div>
                <h1>Bem vindo ao Infnet!</h1>
                <p>Conheça nossos curso de tecnologia.</p>
                <p>Faça sua inscrição agora mesmo.</p>
                <Button as={Link} to="/cursos" className="mb-2">CURSOS</Button>
              </div>
              <div>
                <img src={Banner} alt="banner" className="img-fluid" />
              </div>          
            </div>
          </Container>              
      </Layout>
    );
  }

  export default HomeView