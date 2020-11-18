
import React from "react";
import
    {StyleSheet,View,FlatList,Image,Dimensions} 
from "react-native";

import {Form,Item,Container,Header,Input, Icon, Button, Text,
    Body,Footer, Left,Title, Right,Col, Row, Grid,Content,Card,
    CardItem,
    H1
}
from "native-base"
import{useFonts,Raleway_200ExtraLight}from "@expo-google-fonts/raleway";
import { AppLoading } from "expo";
import worldImgRoute from '../img/Mundo.png'

//Obtener los valores por destructuring
const { width, height } = Dimensions.get("window");

const Home = ({navigation}) => {
    let [fontsLoaded,error] = useFonts({
        Raleway_200ExtraLight,
        "FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
        "Gumy_Monster":require("../../assets/fonts/Gumy_Monster.ttf"),

    });
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
                <Item style={styles.searchbar} >
                    <Input placeholder="Search" style={{color:'#7800B8'}} />
                        <Button style={styles.magnifyinGlass}>
                            <Icon name="search" /> 
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
                                    imgRoute:'World'})}}>
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
        borderRadius: 35,
        marginTop:30,
        resizeMode: "contain",
    
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
        width:150,
        height:150,
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
