import styled from 'styled-components'

function Footer() {
    return (
      <FooterStyled className='text-center'>
        <p className='m-0'>[2022] Todos os direitos reservados ao Instituto Infnet</p>
      </FooterStyled>
    )
}

const FooterStyled = styled.footer`
  background-color: ${props => props.theme.main};
  color: #FFF;
  margin-top: 20px;
  padding: 5px 0;
`

export default Footer