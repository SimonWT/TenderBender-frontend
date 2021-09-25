'use strict'

const port = process.env.PORT || 3003
const API_TOKEN = process.env.API_TOKEN // Auth token

const env = {
  default: {
    port,
    host: `localhost:${port}`,
    apiUrl: 'https://api-stage.leapper.com',
    baseUrl: 'http://localhost:3000/web',
    chatsUrl: 'http://3.141.169.82:8083',
    API_TOKEN,
  },
  local: {
    apiUrl: 'http://localhost:8080'
  },
  staging: {
    apiUrl: 'https://api-stage.leapper.com',
  },
  production: {
    apiUrl: 'https://api.leapper.com',
    baseUrl: 'https://app.leapper.com/web',
  }
}

module.exports = env
