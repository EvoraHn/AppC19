//quien tendra la informacion de nuestra API
//importaremos axios

import axios from "axios";
import getEnvVars from "../../enviroment";

const { apiUrl } = getEnvVars();

//crear una instancia de conexion
const instance = axios.create({
    baseURL: apiUrl
});


export default instance;