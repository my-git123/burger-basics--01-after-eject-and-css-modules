import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://healthyburgersapp.firebaseio.com/'
});

export default instance;