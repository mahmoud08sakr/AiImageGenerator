import axios from 'axios';


const API = axios.create({
    baseURL: 'http://localhost:3000'
});

export const getPost =  async () => {
    return await API.get('/api/posts');
}

export const createPost = async (data) => {
    return await API.post('/api/posts' , data);
}

export const GenerateImage = async (data) => {
    return await API.post('/api/ai' , data);
}