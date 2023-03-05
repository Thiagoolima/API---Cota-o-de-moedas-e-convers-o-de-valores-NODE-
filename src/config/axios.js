const axios = require('axios');

const instanciaAxios = axios.create(
    {
        baseURL: "https://economia.awesomeapi.com.br/last/",
        timeout: 5000
    }
);

module.exports = {
    instanciaAxios
}