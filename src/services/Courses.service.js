import { apiUrl } from "./Api.service"

export async function getCourseById(id) {
    const response = await fetch(`${apiUrl}/courses/${id}?_embed=inscriptions`)
    if(!response.ok) {
        throw new Error ('Response not OK.')
    }
    return await response.json()
}

export const getCourses = async () => {
    const response = await fetch(`${apiUrl}/courses`)
    if (!response.ok) {
        throw new Error ('Response not OK.')
    }
    return await response.json()
}

