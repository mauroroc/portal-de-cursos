export async function getCourseById(id) {
    const response = await fetch(`http://localhost:3001/courses/${id}?_embed=inscriptions`)
    if(!response.ok) {
        throw new Error ('Response not OK.')
    }
    return await response.json()
}