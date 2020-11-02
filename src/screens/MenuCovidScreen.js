//Importar las librerias necesarias
import React, { useState } from "react";
import { StyleSheet, Text }  from "react-native"; //variable que antiene los esstilos

import backend from "../api/backend";
import getEnvVars from "../../enviroment";

const { apiKey } = getEnvVars();

//Variable que va renderizar en pantalla
const MenuCovidScreen = () => {

    //maneja el estado de la informacion de covid
    const [ infCovid, setInfCovid] = useState(null);
    const [error, setError] = useState(false); //variable para el estado del try catch
    
    // Las peticiones se hacen mediante funciones asincronas(cualquie momento)
    const getInfCovid = async () => {
        try {
            //Consultar a la API de Covid19
            const response = await backend.get("cases?country=Spain"); //nuestros valores para este backend Traer la infor de espana

            setInfCovid(response.data); // aqui la variable de estado ya recibio los valores de la peticion
                
        } catch (error) {
            //Error al momento de ejecutar la peticion
            setError(true);
        }
    }

    
    getInfCovid();



return <Text>Resultados de Espana: </Text>;

}

const styles = StyleSheet.create({});

export default MenuCovidScreen;