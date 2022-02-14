import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LayoutPortal } from "../../components/LayoutPortal";
import { PortalTitle } from "../../components/PortalTitle";
import { UpsertCourse } from "../../components/UpsertCourse";
import { createCourse } from "../../services/Courses.service";

export function AdminAddCourse() {
  const navigate = useNavigate()
  const handleSubmit = async (values) => {
    try {
      await createCourse(values)
      navigate('/portal/cursos')
      toast.success('Curso cadastrado com sucesso.')
    } catch (error) {
      toast.error('Falha ao cadastrar curso.')
    }
  }
  return (
  <LayoutPortal>
    <PortalTitle>Novo Curso</PortalTitle>
    <UpsertCourse onSubmit={handleSubmit} buttonLabel='Cadastrar' />
  </LayoutPortal>
  )
}