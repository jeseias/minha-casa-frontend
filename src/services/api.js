import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8002/api/v1'  
});