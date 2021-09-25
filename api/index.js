import axios from "axios";

function getToken() {
    return process.env.API_TOKEN
}

const api = axios.create({
  baseURL: process.env.apiUrl + '/api',
  timeout: 100000,
});

api.interceptors.request.use((request) => {
  const token = getToken();
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

api.interceptors.response.use((request) => {
  return request;
}, function (error) {
  //window.location.href = '/login'
});

export { api, getToken };