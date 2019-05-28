import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-5efc7.firebaseio.com/'
});

export default instance;
