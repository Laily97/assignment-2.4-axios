const axios = require('axios'); //import axios

//create instance API, can be use for all module
const API = axios.create({
    baseURL: 'https://api.data.gov.sg/v1/'
});

module.exports = API;