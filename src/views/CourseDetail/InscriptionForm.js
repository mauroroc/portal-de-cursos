import { Button } from "react-bootstrap"
import { useState } from "react"
import { useSelector } from "react-redux"
import { createInscription} from "../../services/Inscriptions.service.js"
import { selectUser } from "../../store/User/User.selectors.js"
import { AuthForm } from "../../components/AuthForm"
import { toast } from "react-toastify"

function InscriptionForm ({ courseId, onRegister }) {
    const user = useSelector(selectUser)
    const [isSubmiting, setIsSubmiting] = useState(false)    

    const handleInscription = async () => {
        try{            
            setIsSubmiting(true)
            const body = {
                courseId: parseInt(courseId),
                userId: user.id,
                name: user.name,
                email: user.email
            }
            
            await createInscription(body)
            toast.success("Você foi inscrito com sucesso.")                      
            onRegister()
        } catch {
            toast.error("Falha ao fazer inscrição.")
        }   
        setIsSubmiting(false)
    }
    return (
        <>
            <h2>Formulário de Inscrição</h2>
            { user ? (
                <Button onClick={handleInscription} disabled={isSubmiting}>Inscrever</Button>
            ) : (
                <AuthForm />
            )}
        </>
    )
}

export default InscriptionForm