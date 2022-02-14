import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LayoutPortal } from "../../components/LayoutPortal";
import { Loading } from "../../components/Loading";
import { PortalTitle } from "../../components/PortalTitle";
import { UpsertCourse } from "../../components/UpsertCourse";
import { getCourseById } from "../../services/Courses.service";

export function AdminEditCourse() {
  const { id }  = useParams()
  const [course, setCourse] = useState()
  useEffect(()=>{
    const fetchCourse = async() => {
      try {
        const {name, coordinator, shortDescription, description} = await getCourseById(id)
        setCourse({name, coordinator, shortDescription, description})        
      } catch (error) {
        toast.error('Falha ao buscar dados do curso.')
      }
    }
    fetchCourse()
  }, [id])
  return (
    <LayoutPortal>
      <PortalTitle>Editar Curso</PortalTitle>
      { course ? (
        <UpsertCourse initialState={course} buttonLabel="Alterar" />
      ) : (
        <Loading/>
      )}      
    </LayoutPortal>
  )
}