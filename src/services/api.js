import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-paga3.herokuapp.com',
})

export default api;