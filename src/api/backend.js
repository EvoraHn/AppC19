//quien tendra la informacion de nuestra API
//importaremos axios

import axios from "axios";
import getEnvVars from "../../enviroment";

//variables de entorno
const { apiUrl } = getEnvVars();

//crear una instancia de conexion
const instance = axios.create ({

    baseURL: "https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/2.0.0/",
    headers: { 
        'Authorization': 'Bearer 52a46901-e6cd-3bcd-899d-79c3d08782ae', 
        'Cookie': 'route=1605396087.05.4540.451421; connect.sid=s%3A2TcpJmvfT-c4MNRCx04e8qiWgW64uOn8.2SwYE%2B9gF2U5teJ5PlM4Yx1GIo75cieCMXEmS6v3V7Y'
      }

});


export default instance;