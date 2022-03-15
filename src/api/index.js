import axios from 'axios';
import Vue from 'vue';

// axios에서 지원하는 baseURL에 공통된 부분을 선언하고 재사용한다.
const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

export { registerUser };
