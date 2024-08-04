
import axios from 'axios';

export const instance = (url?: string) => {
  // const token = await axios.get("http://localhost:5000/cookies");
  const urlReq = url ? url : ''

  const token = typeof window !== "undefined" ? localStorage.getItem('access_token') : null

  return axios.create({
      baseURL: `http://localhost:5000/${urlReq}`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
};