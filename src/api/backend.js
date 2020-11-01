//quien tendra la informacion de nuestra API
//importaremos axios

import axios from "axios";
import getEnvVars from "../../enviroment";

//crear una instancia de conexion
const instance = axios.create({
    baseURL: process.env.API
});


export default instance;