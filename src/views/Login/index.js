import { Container } from "react-bootstrap"
import styled from "styled-components"
import { AuthForm } from "../../components/AuthForm"

export function Login() {
  return (
    <Background className='p-3 d-flex align-items-center'>
      <Container className='bg-white rounded p-3 p-md-5'>
        <AuthForm />
      </Container>      
    </Background>
  )
}

const Background = styled.main`
  background: linear-gradient(180deg, #35ADE2 0%, #7BC8EA 100%);
`