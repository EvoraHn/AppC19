//Importar las librerias necesarias
import React, { useState } from "react";
import { StyleSheet, Text }  from "react-native"; //variable que antiene los estilos


//Variable que va renderizar en pantalla
const MenuCovidScreen = () => {

    //maneja el estado de la informacion de covid
    const [ infCovid, setInfCovid] = useState(null);


    // Las peticiones se hacen mediante funciones asincronas

    return <Text>Este sera el menu principal</Text>;

}

const styles = StyleSheet.create({});

export default MenuCovidScreen;