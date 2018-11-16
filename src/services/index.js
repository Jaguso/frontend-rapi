import axios from 'axios';

const API_URL = "http://localhost:9000/api/v1";

const createUser = (data) => axios.post(`${API_URL}/users/signup`, data)


export {
    createUser
}