import axios from 'axios';

const API_URL = "http://localhost:9000/api/v1";

const createUser = (data) => axios.post(`${API_URL}/users/signup`, data)

const loginUser = (data) => axios.post(`${API_URL}/users/login`, data)

const getRestaurants = () => axios.get(`${API_URL}/restaurants`)

const createRestaurant = (data) => axios.post(`${API_URL}/restaurants`, data,
{headers: {"Authorization": `JWT ${localStorage.getItem('rappiToken')}`}})


export {
    createUser,
    loginUser,
    createRestaurant,
    getRestaurants
}