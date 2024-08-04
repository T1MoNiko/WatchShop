import { instance } from "../utils/axiosConfig"


export const getIsAdmin = async () => {
    return (await instance('user').get('/admin')).data
}