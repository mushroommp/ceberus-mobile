import axios from 'axios'

const axiosInstance = axios.create({
    headers: {},
    timeout: 10000,
    withCredentials: true
})

const methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

const Proxy = ({ URL, method = methods.GET, data = {} }) => {
    switch (method) {
        case methods.POST:
            return axiosInstance.post(URL)
            break;
        case methods.PUT:
            return axiosInstance.put(URL)
            break;
        case methods.DELETE:
            return axiosInstance.delete(URL)
            break;
        default:
            return axiosInstance.get(URL)
            break;
    }
}

export default ApiFactory = (URL) => {
    return Proxy(URL).then(response => {
        return response.data
    })
}