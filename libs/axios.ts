import axios from "axios"
export const request = axios.create({
baseURL:'https://jsonplaceholder.typicode.com',

});

request.interceptors.request.use((config)=>{

    let loggeduser = 30
    config.data.userId = loggeduser
    return config;
})