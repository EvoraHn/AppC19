/*import React from "react";
import{StyleSheet,Dimensions} from "react-native";

import{Item,Container,Text,Grid,Col,Row,Content,Card,CardItem,Body,Icon,Right,Image} from "native-base";

import{useFonts,Raleway_200ExtraLight}from "@expo-google-fonts/raleway";
import { AppLoading } from "expo";

//Obtener los valores por destructuring
const { width, height } = Dimensions.get("window");

const About = ({navigation}) => {
    let [fontsLoaded,error] = useFonts({
        Raleway_200ExtraLight,
        "FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
        "Gumy_Monster":require("../../assets/fonts/Gumy_Monster.ttf"),

    });
    if (!fontsLoaded){
        return <AppLoading/>
    }
    return(
        <Container style ={styles.containerPrincipal}>
           <Grid style={styles.grid}>
               <Col>
                    <Row>
                        <Content>
                            <Card transparent >
                                <CardItem style={styles.card}>
                                    <Body>
                                        <Text>
                                            1
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content >
                            <Card transparent>
                                <CardItem style={styles.card}>
                                    <Body>
                                        <Text>
                                            1
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content>
                            <Card transparent>
                                <CardItem style={styles.card}>
                                    <Body>
                                        <Text>
                                            1
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content>
                            <Card transparent>
                                <CardItem style={styles.card}>
                                    <Body>
                                        <Text>
                                            1
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                    </Row>
               </Col>
           </Grid>
           <Container style={styles.container}>
               <Text style={styles.title}>
                   America
               </Text>
               <Content>
                    <Card transparent>
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
        </Container>
    )


}


const styles = StyleSheet.create({
    container: {
        flex:10,
        justifyContent:"center",
        //alignItems:"center",
        borderRadius: 35,
        backgroundColor:'white',
    },
    containerPrincipal: {
        flex:1,
        //justifyContent:"center",
        //alignItems:"center",
        backgroundColor:'#7800B8',
    },
    card:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#80FFDB',
        borderRadius:20,
        //borderColor:'#7800B8',
    },
    grid:{
        marginTop: 15,
        alignItems:"center",
        //backgroundColor:'#78ff35',
    },
    title:{
        marginLeft:width*.30,
        fontFamily: "FredokaOne-Regular",
        fontSize: 43,
    },
    listItem:{
        fontFamily: "FredokaOne-Regular",
        fontSize: 20,
        marginLeft:width*.05,

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
})
export default About;*/





//z index
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

const About = () => {
    //fuentes de origen externo
    let [fontsLoaded,error] = useFonts({
        Raleway_200ExtraLight,
        "FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
    });
    if (!fontsLoaded){
        return <AppLoading/>
    }
    return (
        
        <Container style ={styles.containerPrincipal}>
           <Grid style={styles.grid}>
               <Col>
                    <Row style={{marginLeft:10,marginRight:10}}>
                        <Content >
                            <Card transparent >
                                <CardItem style={styles.card}>
                                    <Body style={{alignItems:"center"}}>
                                        <Text>
                                            America
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content >
                            <Card transparent>
                                <CardItem style={styles.card}>
                                    <Body style={{alignItems:"center"}}>
                                        <Text>
                                            Asia
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content>
                            <Card transparent>
                                <CardItem style={styles.card}>
                                    <Body style={{alignItems:"center"}}>
                                        <Text>
                                            Europa
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content>
                            <Card transparent>
                                <CardItem style={styles.card}>
                                    <Body style={{alignItems:"center"}}>
                                        <Text>
                                            Mundo
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                    </Row>
               </Col>
           </Grid>
           <Container style={styles.container}>
               <Text style={styles.title}>
                   
               </Text>
               <Content>
                    <Card transparent>
                        <CardItem cardBody >
                            <Image source={require('../img/logo.png')} style={styles.img} />
                        </CardItem>
                            <CardItem >
                                <Body style={{alignItems:"center"}}>
                                    <Text style={styles.version} >Version Develop </Text>
                                    <Text style={styles.text}>App Hello! Covid are an app
                                     for see the word status in this pandemic</Text>
                                    <Text style={styles.text}>Designed By: Ariel Lutz 
                                    & Eliab Evora</Text>
                                    <Text style={styles.text}>from Honduras   
                                    november 2020</Text>
                                </Body>
                            </CardItem>
                    </Card>
               </Content>

           </Container>
        </Container>

   
      );
  };
  

const styles = StyleSheet.create({

   
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
    },
        container: {
            flex:10,
            justifyContent:"center",
            //alignItems:"center",
            borderRadius: 35,
            backgroundColor:'white',
        },
        containerPrincipal: {
            flex:1,
            paddingTop:height*0.03,
            //justifyContent:"center",
            //alignItems:"center",
            backgroundColor:'#7800B8',
        },
        card:{
            justifyContent:"center",
            alignItems:"center",
            //backgroundColor:'#80FFDB',
            borderRadius:20,
            //borderColor:'#7800B8',
        
        },
        grid:{
            marginTop: 15,
            alignItems:"center",
            //backgroundColor:'#78ff35',
        },
        title:{
            marginLeft:width*.30,
            fontFamily: "FredokaOne-Regular",
            fontSize: 43,
        },
        listItem:{
            fontFamily: "FredokaOne-Regular",
            fontSize: 20,
            marginLeft:width*.05,
    
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
            //backgroundColor: 'yellow',
            width: width * .80,
            height: height * .50,
            resizeMode: "contain",
    
        },
        text:{
            marginTop:20,
            //marginRight:40,
            //marginLeft:40,
            //marginLeft:width*.25,
            //fontFamily: "FredokaOne-Regular",
            fontSize:10,
        },
        version:{
            marginTop:40,
            //marginRight:width*.40,
            //marginLeft:width*.25,
            fontFamily: "FredokaOne-Regular",
            fontSize:30,
        }
    

    

});
export default About;
