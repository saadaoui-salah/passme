const token = localStorage.getItem('token')

export const conf = {
    url: 'http://localhost:8000/api/',
    headers: {"Authorization": `Token ${token}`}
}