import axios from 'axios';

export default axios.create({
  baseURL: true ? 'https://minhcasa.herokuapp.com/' :'http://127.0.0.1:8002/api/v1'
});