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
import { color } from "react-native-reanimated";
//Obtener los valores por destructuring altura y ancho
const { width, height } = Dimensions.get("window");

const Results = ({navigation}) => {
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
            <CardItem style={{backgroundColor:'#14213D',}} > 
                <Left>
                    <Text style={styles.title}>Region</Text>
                </Left>   
                
                <Right>
                    <Image source={require('../img/america.png')} transparent style={styles.linkImage} />
                </Right>
            </CardItem>
            <CardItem style={{backgroundColor:'#14213D',}}>
                <Left>
                    <Text style={styles.subTitle}>Country</Text>
                </Left>
                
            </CardItem>
            
           <Container style={styles.container}>
           
               <Text style={styles.titleTable}>
                   Results
               </Text>
               <Content>
                    <Card transparent>
                        <CardItem >
            
                            <Left>
                                <Text style={styles.listItem}>Infecteds</Text>
                            </Left>
                            
                        </CardItem>
                        <CardItem >
                            <Left>
                                
                            </Left>
                            
                        </CardItem>
                        <CardItem >
            
                            <Left>
                                <Text style={styles.listItem}>recovered</Text>
                            </Left>
                            
                        </CardItem>
                        <CardItem >
                            <Left>
                                
                            </Left>
                            
                        </CardItem>
                        <CardItem >
            
                            <Left>
                                <Text style={styles.listItem}>dead</Text>
                            </Left>
                            
                        </CardItem>
                        <CardItem >
                            <Left>
                                
                            </Left>
                            
                        </CardItem>
                        
                    </Card>
               </Content>

           </Container>
           <CardItem style={{backgroundColor:'#14213D'}}>
               <Left>
                   <Text style={{color:'#fff'}}>
                       updated results in the palm of your hand!
                   </Text>

               </Left>
               <Right>
                    <Image source={require('../img/logo.png')} transparent style={styles.linkImage} />
               </Right>
           </CardItem>
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
        marginBottom: height*0.001,
        paddingBottom:height*0.04,
        //marginTop:height*0.04
    },
    containerPrincipal: {
        flex:1,
        paddingTop:height*0.04,
        paddingBottom:height*0.009,
        //backgroundColor:'#7800B8',
        backgroundColor:'#14213D',
    },
    card:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        marginBottom:30
    },
    grid:{
        marginTop: height*0.015,
        //marginBottom:height*0.1,
        alignItems:"center",
        //height:height*1
    },
    listItem:{
        fontFamily: "FredokaOne-Regular",
        fontSize: 20,
        marginLeft:width*.05,
    },
    version:{
        marginTop:height * 0.15,
        //marginRight:width*.40,
        //marginLeft:width*.25,
        fontFamily: "FredokaOne-Regular",
        fontSize:30,
    },
    linkImage:{
        width: width * .30,
        height: height * .1,
        resizeMode: "contain",
        marginLeft: width*0.055,
    },
    title:{
        textAlign:"center",
        fontFamily: "FredokaOne-Regular",
        fontSize: height*.069,
        color:'#FFF',
    },
    titleTable:{
        textAlign:"center",
        fontFamily: "FredokaOne-Regular",
        fontSize: height*.049,
        marginTop:height*.029,
        marginBottom:height*.029,
        
    },
    subTitle:{
        textAlign:"center",
        fontFamily: "FredokaOne-Regular",
        fontSize: height*.039,
        marginTop:height*-.029,
        color:'#FFF',
        
    },
    listItem:{
        fontFamily: "FredokaOne-Regular",
        fontSize: 20,
        marginLeft:width*.05,
        marginRight:width*.05,

    },
});
export default Results;