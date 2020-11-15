import Constants from "expo-constants";
//import instance from "./src/api/backend";

const ENV = {
    dev: {
        apiUrl: "https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/2.0.0/" //URl base de la API
        
    }
};


const getEnvVars = (env = Constants.manifest.releaseChannel) => {

    //  esta variable va establecer verdadero cuando react-native este corriendo
    // en modo desarrollador y falso cuando sea publicado
    if (__DEV__) {
        return ENV.dev;
    }
};



export default getEnvVars;
