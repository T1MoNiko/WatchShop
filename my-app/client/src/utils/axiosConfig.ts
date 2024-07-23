
import axios from 'axios';

export const instance = () => {
    // const token = await axios.get("http://localhost:5000/cookies");

    const token = typeof window !== "undefined" ? localStorage.getItem('access_token') : null

    console.log(token)

    return axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
};