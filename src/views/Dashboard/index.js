import { Alert } from "react-bootstrap";
import { LayoutPortal } from "../../components/LayoutPortal";
import { PortalTitle } from "../../components/PortalTitle";

export function DashboardView() {
  return (
    <LayoutPortal>
        <PortalTitle>Bem vindo(a) Teste!</PortalTitle>
        <p>Utilize o menu para gerenciar os dados do site.</p>      
        <Alert variant="info">
            Você receberá as instruções do curso por e-mail
        </Alert>
    </LayoutPortal>
  )
}