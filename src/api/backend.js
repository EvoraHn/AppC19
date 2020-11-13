//quien tendra la informacion de nuestra API
//importaremos axios

import axios from "axios";
<<<<<<< HEAD
//import { config } from "dotenv/types";
import getEnvVars from "../../enviroment";

//variables de entorno
const { apiUrl } = getEnvVars();

//Axios
//const axios = require('axios');


const instance = axios.create ({

    baseURL: "https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/2.0.0/",
    headers: { 
        'Authorization': 'Bearer a06d12d9-96f8-379b-91aa-47cd1abba394', 
        'Cookie': 'route=1604878172.593.2154.220417; connect.sid=s%3A4OWUBGuaq5pXVYKsL5sLxyqCqPyf4DcM.q347FDL9N9W%2BObfPKOj90oLJaDEgGCtFuDskOkHdJI4'
    }
});

/*axios(instance)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});*/


export default instance;

/*axiosApiInstance.interceptors.request.use(
    async config => {
        const value = await redistClient.get(redisKey)
        const keys = JSON.parse(value)
        config.authorization = {
            'TYPE':"Bearer Token",
            'Token': '9d1b7d6e-e82d-3da9-8dae-85f2985bdbf6',

        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);*/




//-----------------------------------------
//crear una instancia de conexion
/*const instance = axios.create({
    baseURL: apiUrl
});*/


=======
import getEnvVars from "../../enviroment";

//crear una instancia de conexion
const instance = axios.create({
    baseURL: process.env.API
});


export default instance;
>>>>>>> Eliab
