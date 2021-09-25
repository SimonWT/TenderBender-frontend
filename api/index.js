import axios from "axios";

function getToken(cookie) {
  if (process.client) {
    const token = cookie.match(/TBtoken=([^ ;]*)/)
    if (token && token.length > 0) { return token[1] }
    return null
  } else {
    // we don't fetch client-specific data on server
    return  cookie.split(';').find('TBtoken')
  }
}

const api = axios.create({
  baseURL: process.env.apiUrl + '/api',
  timeout: 100000,
});

api.interceptors.request.use((request) => {
  const cookie = document ? document.cookie : request.headers.cookie
  const token = getToken(cookie);
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