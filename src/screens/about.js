import React
from "react";
import {StyleSheet,View,FlatList,Image,Dimensions} 
from "react-native";
import {Form,Item,Container,Header,Input, Icon, Button, Text,
    Body,Footer, Left,Title, Right,Col, Row, Grid,Content,Card,
    CardItem,
    H1}
from "native-base"
import{useFonts,Raleway_200ExtraLight}
from "@expo-google-fonts/raleway";
import { AppLoading } 
from "expo";

//Obtener los valores por destructuring altura y ancho
const { width, height } = Dimensions.get("window");

const Home = () => {
    //fuentes de origen externo
    let [fontsLoaded,error] = useFonts({
        Raleway_200ExtraLight,
        "FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
    });
    if (!fontsLoaded){
        return <AppLoading/>
    }
    return (
        
        <Container style={styles.container}>
            <Header transparent>
                <Button rounded  iconLeft light transparent style={styles.button}>
                    <Icon name='arrow-back' />
                    <Text>Atrás</Text>
                </Button>
            </Header>      
      </Container>

   
      );
  };
  

const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 35,
        backgroundColor: 'red',
        
    },
    logoApp: {
        width: width,
        height: height * 0.15,
        resizeMode: "contain",
        
    },
    button:{
        marginRight:310,
        backgroundColor: 'green',
    },
    img:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 35,
        backgroundColor: 'yellow',

    },
    text:{

    }

    

});
export default Home;