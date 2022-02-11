import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LayoutPortal } from "../../components/LayoutPortal";
import { Loading } from "../../components/Loading";
import { ModalConfirm } from "../../components/ModalConfirm";
import { PortalTitle } from "../../components/PortalTitle";
import { deleteCourse, getCourses } from "../../services/Courses.service"
import { TableCourses } from "./TableCourses";

export function AdminCourses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)  
  const [courseToDelete, setCourseToDelete] = useState()

  const fetchCourses = async() => {
    try {
      const data = await getCourses()
      setCourses(data)
    } catch {
      toast.error('Falha ao listar cursos. Tente novamente')
    } 
    setLoading(false)
  }  

  useEffect(() => {
    fetchCourses()    
  }, [])

  const openModal = (id) => {    
    setCourseToDelete(id)
  }
  const closeModal = () => {    
    setCourseToDelete(undefined)
  }

  const handleDeleteCourse = async () => {
    try {
      await deleteCourse(courseToDelete.id)
      fetchCourses()      
      toast.success('Curso excluído com sucesso.')
      closeModal()
    } catch {
      toast.error('Falha ao excluir o curso.')
    }
  }
  return (
    <LayoutPortal>
      <PortalTitle buttonText='Novo Curso' buttonLink="/portal/add">Cursos Cadastrados</PortalTitle>
      {loading ? (
        <Loading />
      ) : (
        <TableCourses courses={courses} onClickDelete={openModal} />
      )}
      <ModalConfirm show={!!courseToDelete} 
        onConfirm={handleDeleteCourse} 
        onHide={closeModal}
        title='Confirmação de Exclusão'
        content={<p>Você confirma que quer excluir <strong>{courseToDelete?.name}</strong> ?</p>}
        cancelLabel='Cancelar'
        confirmLabel='Excluir'
      />
    </LayoutPortal>
  )
}