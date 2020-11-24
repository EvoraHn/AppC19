
import React, { useState, useEffect } from "react";
import
    {StyleSheet,Image,Dimensions} 
from "react-native";

import {Item,Container,Input, Icon, Button, Text,
    Body,Content,Card,
    CardItem,
    H1
}
from "native-base"
import{useFonts,Raleway_200ExtraLight}from "@expo-google-fonts/raleway";
import { AppLoading } from "expo";
//import worldImgRoute from '../img/Mundo.png'

//Obtener los valores por destructuring
const { width, height } = Dimensions.get("window");

const Home = ({navigation}) => {
    //variable para hacer busquedas
    const {country,setCountry} = useState("");
    const [countryError, setCountryError] = useState(false);

     // Verifica si el usuario ingresa información en el input de búsqueda
    const handlerCountry = () => {
        if (!country) setCountryError(true);
        else {
        navigation.navigate("Results", { country });
        setCountry("");
        setCountryError(false);
        }
    };


    let [fontsLoaded,error] = useFonts({
        Raleway_200ExtraLight,
        "FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
        "Gumy_Monster":require("../../assets/fonts/Gumy_Monster.ttf"),

    });

      // Remueve el valor de error del input de búsqueda si el usuario ingresa información
    useEffect(() => {
        if (country) setCountryError(false);
    }, [country]);

    if (!fontsLoaded){
        return <AppLoading/>
    }
    return (
    <Container style={styles.containerPrincipal}>    
    <Container style= {styles.container}>
        
        
        <Content>
        <Body style={{marginBottom:70}}>
            <Text style={styles.title} onPress={()=>
                 {navigation.navigate("About")}}>
                Hello!
            </Text>
            <H1 style={styles.subtitle} onPress={()=>
                 {navigation.navigate("About")}}>
                Covid
            </H1>
            <Card style={{width:width*.80,borderRadius:20,paddingTop:5}}>
                <Item style={styles.countrybar} >
                    <Input 
                      placeholder={
                          countryError ? "Search Country" : "Search..."
                      }
                      placeholderTextColor={countryError ? "purple" : "purple"}
                      value={country}
                      onChangeText={setCountry} style={{color:'#7800B8'}} 
                      />
                        <Button onPress={handlerCountry} style={styles.magnifyinGlass} >
                        <Icon name="search"/> 
                        </Button>                      
                </Item>
            </Card>
        </Body>
        
            

        <CardItem style={styles.header} > 
               
        <Card  style={styles.buttonContainer}>
                    <CardItem transparent style={styles.card}>
                        <Body transparent style={styles.body}>
                            <CardItem transparent style={styles.imageContainer}>
                                <Button transparent
                                    onPress={()=> {navigation.navigate("America")}}>
                                    <Image source={require('../img/america.png')}
                                        style={styles.linkImage} />
                                </Button>
                            </CardItem>
                            <Text style={styles.buttonText}>
                                America
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card  style={styles.buttonContainer}>
                    <CardItem transparent style={styles.card}>
                        <Body transparent style={styles.body}>
                            <CardItem transparent style={styles.imageContainer}>
                                <Button transparent
                                    onPress={()=> {navigation.navigate("Asia")}}>
                                    <Image source={require('../img/Asia.png')}
                                        style={styles.linkImage} />
                                </Button>
                            </CardItem>
                            <Text style={styles.buttonText}>
                                Asia
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                
        </CardItem>
        <CardItem style={styles.header} > 
               
                <Card  style={styles.buttonContainer}>
                    <CardItem transparent style={styles.card}>
                        <Body transparent style={styles.body}>
                            <CardItem transparent style={styles.imageContainer}>
                                <Button transparent
                                    onPress={()=> {navigation.navigate("Europa")}}>
                                    <Image source={require('../img/Europa.png')}
                                        style={styles.linkImage} />
                                </Button>
                            </CardItem>
                            <Text style={styles.buttonText}>
                                Europa
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card  style={styles.buttonContainer}>
                    <CardItem transparent style={styles.card}>
                        <Body transparent style={styles.body}>
                            <CardItem transparent style={styles.imageContainer}>
                                <Button transparent
                                    onPress={()=> {navigation.navigate("Results",
                                    {country:'World',region:'World',
                                    imgRoute:'Mundo'})}}>
                                    <Image source={require('../img/Mundo.png')}
                                        style={styles.linkImage} />
                                </Button>
                            </CardItem>
                            <Text style={styles.buttonText}>
                                The World
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                
        </CardItem>
        </Content>

    </Container>
    </Container>
      );
  };
  

const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 25,
        marginTop:30,
        resizeMode: "contain",
        paddingBottom:30
    
    },
    containerPrincipal: {
        flex:3,
        backgroundColor:'#7800B8',
        padding:height*0.005,
        resizeMode: "contain",

    },
    title:{
        marginTop:100,
        fontSize: 100,
        color: '#00000F',
        fontFamily: "FredokaOne-Regular",
    },
    subtitle:{
        marginTop:5,
        fontSize: 30,
        color: '#00000F',
        fontFamily: "FredokaOne-Regular",
        marginBottom: 80,
    },
    searchbar:{
        marginBottom:20,
        height:30,
        marginRight:5,
        marginLeft:5,
    },
    magnifyinGlass:{
        borderRadius:19,
        backgroundColor:'#7800B8',
        color:'white',
    },
    
    itemCenter:{
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center"
    },
    //botones 
    linkImage:{
        width: width * .25,
        height: height * .10,
        resizeMode: "contain",
    },
    card:{
        padding:2,
        borderRadius:20,
        width:135,
        height:135,
        textAlign:"center",
    },
    imageContainer:
    {justifyContent:"center",
    width:117},
    body:{textAlign:"center",
    justifyContent:"center",
    },
    buttonContainer:
    {
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center"
    },
    buttonText:{
        alignSelf:"center",
        marginTop:20
    },
    header:{
        marginTop:-12,
        backgroundColor: 'white',
    },
});
export default Home;
