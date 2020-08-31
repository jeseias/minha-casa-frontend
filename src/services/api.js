import axios from 'axios';

export default axios.create({
  baseURL: false ? 'https://minhcasa.herokuapp.com/api/v1' : 'http:127.0.0.1:8002/api/v1'
});