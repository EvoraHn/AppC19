//Importar las librerias necesarias
import React, { useState, useEffect } from "react";
import { StyleSheet, Text }  from "react-native"; //variable que antiene los esstilos
import { Content,  Spinner} from "native-base";

import backend from "../api/backend";
import getEnvVars from "../../enviroment";

//Variables de Entorno
const {apiUrl} = getEnvVars();

//const { apiKey } = getEnvVars();
//Variable que va renderizar en pantalla
const MenuCovidScreen = () => {

    //maneja el estado de la informacion de covid
    const [ informacionCovid, setInformacionCovid] = useState("");
    const [error, setError] = useState(false); //variable para el estado del try catch
    
    // Las peticiones se hacen mediante funciones asincronas(cualquie momento)
    const getinformacionCovid = async () => {
        try {
            //Consultar a la API de Covid19
            const response = await backend.get(`cases?country=Spain`); //nuestros valores para este backend Traer la infor de espana
            
            console.log("Esto es la informacion de espana"); // solo para probar que conecta
            console.log(response.data[0].data);// solo para probar que conecta en el prompt
            
            setInformacionCovid(response.data); // aqui la variable de estado ya recibio los valores de la peticion       
            
        } catch (error) {
            //Error al momento de ejecutar la peticion
            setError(true);
        }
    };
      // Efecto secundario que ejecuta la consulta a la API
    useEffect(() => {
        getinformacionCovid();
    }, []);
      
    //los componentes se renderizan antes de ser mostrados y nunca pueden ir vacios
    if (!informacionCovid) {
        return (
          <Content>
            <Spinner />
          </Content>
        )
      }
   
return (
    <>

    <Text>Informacion de casos en espana: {informacionCovid[0].data} </Text> 
    </>
);
};

//const styles = StyleSheet.create({});
export default MenuCovidScreen;