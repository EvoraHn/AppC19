
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
    <Container style={{backgroundColor:'#7800B8',padding:height*0.005}}>    

    <Container style= {styles.container}>
                <Button transparent style={styles.menu} onPress={()=> {navigation.navigate("About")}} >
                    <Icon name="menu"  />
                </Button>
            
            
        
        <Body>
            <Text style={styles.title} onPress={()=> {navigation.navigate("About")}}>Hello!</Text>
            <H1 style={styles.subtitle} onPress={()=> {navigation.navigate("About")}}>Covid</H1>
            <Card style={{width:width*.80,backgroundColor:'#FFFFFF',borderRadius:20,paddingTop:5}}>
                <Item style={styles.searchbar} >
                            <Input placeholder="Search" style={{color:'#7800B8'}} />
                            <Button style={styles.magnifyinGlass}>
                                <Icon name="search" /> 
                            </Button>
                                                
                </Item>

            </Card>

                        
                                        
                
                    
          <Grid style={{marginTop:height*.08,marginBottom:height*.1}}>
                <Col>
                    <Row > 
                        <Content  >
                            <Card style={styles.link} >
                                <CardItem style={styles.link} >
                                <Body style={styles.itemCenter} >
                               
                                    <CardItem cardBody style={{alignItems:"center",alignContent:"center",justifyContent:"center"}} >
                                   
                                            <Image source={require('../img/america.png')} transparent style={styles.linkImage} />
                                        
                                    </CardItem>
                                    
                                    <Text style={styles.linkText} onPress={()=> {navigation.navigate("America")}}>
                                        America
                                    </Text>
                                    
                                </Body>
                                </CardItem>
                            </Card>
                        </Content>

                        <Content>
                            <Card style={styles.link} >
                                <CardItem style={styles.link} >
                                <Body style={styles.itemCenter} >
                                    <CardItem cardBody style={{alignItems:"center",alignContent:"center",justifyContent:"center"}} >
                                        <Image source={require('../img/Asia.png')} transparent style={styles.linkImage} />
                                    </CardItem>
                                    <Text style={styles.linkText} onPress={()=> {navigation.navigate("America")}}>
                                        Asia
                                    </Text>
                                </Body>
                                </CardItem>
                            </Card>
                        </Content>
                    </Row>

                    <Row style Row>
                        <Content  >
                            <Card style={styles.link} >
                                <CardItem style={styles.link} >
                                <Body style={styles.itemCenter} >
                                    <CardItem cardBody style={{alignItems:"center",alignContent:"center",justifyContent:"center"}} >
                                        <Image source={require('../img/Europa.png')} transparent style={styles.linkImage} />
                                    </CardItem>
                                    <Text style={styles.linkText} onPress={()=> {navigation.navigate("America")}}>
                                        Europa
                                    </Text>
                                </Body>
                                </CardItem>
                            </Card>
                        </Content>

                        <Content >
                            <Card style={styles.link} >
                                <CardItem style={styles.link} >
                                <Body style={styles.itemCenter} >
                                    <CardItem cardBody style={{alignItems:"center",alignContent:"center",justifyContent:"center"}} >
                                        <Image source={require('../img/Mundo.png')} transparent style={styles.linkImage} />
                                    </CardItem>
                                    <Text style={styles.linkText} onPress={()=> {navigation.navigate("Results")}}>
                                        the world
                                    </Text>
                                </Body>
                                </CardItem>
                            </Card>
                        </Content>
                    </Row>
                </Col>
            </Grid>
        </Body>
        

        
 
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
        
    },
    logoApp: {
        width: width,
        height: height * 0.15,
        resizeMode: "contain",
        
    },
    row:{
        width: width*0.60,
        height: height*0.60,
        resizeMode: "contain",
        //margin: width*0.50
    },
    grid:{
        alignItems:"center",
    },
    title:{
        marginTop: height*.03,
        fontSize: height*.11,
        color: '#00000F',
        fontFamily: "FredokaOne-Regular",
    },
    subtitle:{
        marginTop:5,
        fontSize: height*.03,
        color: '#00000F',
        fontFamily: "FredokaOne-Regular",
        marginBottom: height*0.1,
    },
    header:{
        backgroundColor: 'white',
    },
    menu:{
        marginTop:5,
        color: 'purple',
        resizeMode:'stretch',
        width:width*.5,
        height:height*.09,
    },
    searchbar:{
        marginBottom:20,
        height:30,
        marginRight:5,
        marginLeft:5,
        //backgroundColor:'red',
        //borderRadius:20,
        //borderColor:'purple',

    },
    link:{
        //resizeMode:'cover',
        marginLeft:10,
        marginRight:10,
        //marginBottom:5,
        //marginTop:5,
        borderRadius: 20,
        //backgroundColor:'red',
        //borderWidth:30,
        //borderColor:'green',
        
        
    },
    magnifyinGlass:{
        borderRadius:19,
        backgroundColor:'#7800B8',
        color:'white',
    },
    linkImage:{
        width: width * .30,
        height: height * .10,
        resizeMode: "contain",
    },
    itemCenter:{
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center"
    },
    linkText:{
        marginTop:height*.01,

    },
    containerPrincipal: {
        flex:1,
        paddingTop:height*0.03,
        //justifyContent:"center",
        //alignItems:"center",
        //backgroundColor:'#7800B8',
    },
    


});
export default Home;
