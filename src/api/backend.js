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
<<<<<<< HEAD
<<<<<<< HEAD
        'Authorization': 'Bearer 1c763378-cf10-3abd-9ce4-0b07cb90f74d', 
=======
        'Authorization': 'Bearer b68c8305-fca0-3f60-bc30-b4ef11c62ce4', 
>>>>>>> Ariel
=======
        'Authorization': 'Bearer 17a7d0b9-8430-31fe-a13c-4bd155106d15', 
>>>>>>> Ariel
        'Cookie': 'route=1605396087.05.4540.451421; connect.sid=s%3A2TcpJmvfT-c4MNRCx04e8qiWgW64uOn8.2SwYE%2B9gF2U5teJ5PlM4Yx1GIo75cieCMXEmS6v3V7Y'
      }

});


export default instance;