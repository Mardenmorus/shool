import axios from 'axios';

const API = axios.create({
    baseURL: "https://reqres.in/",
});

export const fetchNews = API.get('api/users?page=2');