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

export const deleteCourse = async (id) => {
    const response = await fetch(`${apiUrl}/courses/${id}`, {
        method: 'DELETE'
    })
    if (!response.ok) {
        throw new Error ('Response not OK.')
    }
}

export const createCourse = async (courseData) => {
    const response = await fetch(`${apiUrl}/courses`, {
        method: 'POST',
        body: JSON.stringify(courseData),
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
    if (!response.ok) {
        throw new Error ('Response not OK.')
    }   
}

export const updateCourse = async(id, courseData) => {
    const response = await fetch(`${apiUrl}/courses/${id}`, {
        method: 'PUT',
        body: JSON.stringify(courseData),
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
    if (!response.ok) {
        throw new Error ('Response not OK.')
    }  
}