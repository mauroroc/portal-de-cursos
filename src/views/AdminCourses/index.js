import { useEffect, useState } from "react";
import { LayoutPortal } from "../../components/LayoutPortal";
import { Loading } from "../../components/Loading";
import { PortalTitle } from "../../components/PortalTitle";
import { getCourses } from "../../services/Courses.service"

export function AdminCourses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async() => {
      const data = await getCourses()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [])
  return (
    <LayoutPortal>
      <PortalTitle>Cursos Cadastrados</PortalTitle>
      {loading ? (
        <Loading />
      ) : (
        <p>Listagem</p>
      )}
    </LayoutPortal>
  )
}