import axios from 'axios';

const instance = axios.create({
    baseURL:'https://alisveris-6baec.firebaseio.com/'
});

export default instance;