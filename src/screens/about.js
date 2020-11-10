import React
from "react";

import {StyleSheet,View,FlatList,Image,Dimensions} 
from "react-native";
import {Form,Item,Container,Header,Input, Icon, Button, Text,
    Body,Footer, Left,Title, Right,Col, Row, Grid,Content,Card,
    CardItem,Thumbnail,
    H1}
from "native-base"
import{useFonts,Raleway_200ExtraLight}
from "@expo-google-fonts/raleway";
import { AppLoading } 
from "expo";
import { version } from "react";

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
        
        <Container style= {styles.container} >
            <Header transparent>
                
            </Header>

            <Content >
          <Card >
            
            <CardItem cardBody >
              <Image source={require('../img/logo.png')} style={styles.img} />
            </CardItem>
            <CardItem >

                <Body>
                    <Text style={styles.version} >Version 1.0 </Text>
                    
                    <Text style={styles.text}>App Hello! Covid are a app for show the word status in this pandemic</Text>
           
                </Body>
            </CardItem>
          </Card>
        </Content>      
      </Container>

   
      );
  };
  

const styles = StyleSheet.create({

    container: {
        //flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 35,
        backgroundColor: 'green',
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
        marginLeft: 40,
        marginRight: 40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 35,
        backgroundColor: 'yellow',
        width: width * .80,
        height: height * .50,
        resizeMode: "contain",

    },
    text:{
        marginTop:20,
        marginRight:40,
        marginLeft:40,
        //marginLeft:width*.25,
        //fontFamily: "FredokaOne-Regular",
        fontSize:10,
    },
    version:{
        marginTop:40,
        //marginRight:width*.40,
        marginLeft:width*.25,
        fontFamily: "FredokaOne-Regular",
        fontSize:30,
    }

    

});
export default Home;
