import axios from 'axios';

let APIURL
 APIURL = 'https://randomuser.me/api/';


const api = axios.create({
    baseURL:`${APIURL}`,
});

export default api;
