import React from "react";
import {StyleSheet,Image,Dimensions} from "react-native";
import {Container,Button, Text,Body,Col, Row,Right,Grid,Content,Card,CardItem, Left}
from "native-base"
import{useFonts,Raleway_200ExtraLight} from "@expo-google-fonts/raleway";
import { AppLoading } from "expo";
const { width, height } = Dimensions.get("window");
const About = ({navigation}) => {
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
            
            <CardItem style={styles.header} > 
                <Card transparent >
                    <CardItem style={styles.card}>
                        <Button transparent 
                            onPress={()=> {navigation.navigate("America")}}>
                            <Image source={require('../img/america.png')}
                                transparent style={styles.linkImage} />
                        </Button>
                    </CardItem>
                </Card>

                <Card transparent >
                    <CardItem style={styles.card}>
                        <Button transparent 
                            onPress={()=> {navigation.navigate("Asia")}}>
                            <Image source={require('../img/Asia.png')}
                                transparent style={styles.linkImage} />
                        </Button>
                    </CardItem>
                </Card>

                <Card transparent >
                <CardItem style={styles.card}>
                    <Button transparent 
                    onPress={()=> {navigation.navigate("America")}}>
                    <Image source={require('../img/Europa.png')}
                        transparent style={styles.linkImage} />
                    </Button>
                </CardItem>
                </Card>

                <Card transparent >
                <CardItem style={styles.card}>
                    <Button transparent 
                    onPress={()=> {navigation.navigate("Results",
                    {country:'World',region:'World',imgRoute:'World'})}}>
                    <Image source={require('../img/Mundo.png')}
                        transparent style={styles.linkImage} />
                    </Button>
                </CardItem>
                </Card>

                <Card transparent >
                <CardItem style={styles.card}>
                    <Button transparent 
                    onPress={()=> {navigation.navigate("Home")}}>
                    <Image source={require('../img/homeOscuro.png')}
                        transparent style={styles.linkImage} />
                    </Button>
                </CardItem>
                </Card>
            </CardItem>

           
            
            
           
           <Container style={styles.container}>
               <Content>
                    <Card transparent>
                        <CardItem cardBody >
                            <Image source={require('../img/logo.png')} 
                            style={styles.img}/>
                        </CardItem>
                        <CardItem >
                            <Body style={{alignItems:"center"}}>
                                <Text style={styles.version}>
                                    Version Develop
                                </Text>
                                <Text style={styles.text}>
                                    App Hello! Covid are an app
                                    for see the word status in this pandemic
                                </Text>
                                <Text style={styles.text}>
                                    Designed & coded By: Ariel Lutz 
                                    & Eliab Evora
                                </Text>
                                <Text style={styles.text}>
                                    from Honduras   
                                    november 2020
                                </Text>
                                </Body>
                        </CardItem>
                    </Card>
               </Content>
           </Container>
        </Container>
      );
  };
  

const styles = StyleSheet.create({
    container: {
        flex:8,
        paddingTop:40,
        justifyContent:"center",
        borderRadius: 35,
        backgroundColor:'white',
        //marginBottom: height*0.000001,
        //paddingBottom:height*0.000001,
    },
    containerPrincipal: {
        flex:1,
        paddingTop:height*0.03,
        backgroundColor:'#7800B8',
        
    },
    card:{
        justifyContent:"center",
        alignItems:"center", 
        borderRadius:20,
        width:70,
        alignContent:"center",                       
    },
    header:{
        backgroundColor:'#7800B8',
        justifyContent:"center",
    },
    grid:{
        flex:1,
        marginTop: height*0.015,
        marginBottom:height*0.015,
        alignItems:"center",
    },
    listItem:{
        fontFamily: "FredokaOne-Regular",
        fontSize: 20,
        marginLeft:width*.05,
    },
    img:{
        marginLeft: 40,
        marginRight: 40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 35,
        width: width * .80,
        height: height * .50,
        resizeMode: "contain",
    },
    text:{
        marginTop:20,
        fontSize:10,
    },
    version:{
        marginTop:40,
        fontFamily: "FredokaOne-Regular",
        fontSize:30,
    },
    linkImage:{
        width: width * .15,
        height: height * .05,
        resizeMode: "contain",
    },
    
});
export default About;
/*
<Grid style={styles.grid}>
               <Col>
                    <Row style={{marginLeft:10,marginRight:10,}}>
                        <Content >
                            <Card transparent >
                            <CardItem style={styles.card}>
                                <Button transparent 
                                onPress={()=> {navigation.navigate("America")}}>
                                <Image source={require('../img/america.png')}
                                 transparent style={styles.linkImage} />
                                </Button>
                            </CardItem>
                            </Card>
                        </Content>
                        <Content >
                            <Card transparent>
                            <CardItem style={styles.card}>
                                <Button transparent onPress={()=> 
                                    {navigation.navigate("America")}}>
                                    <Image source={require('../img/Asia.png')} 
                                        transparent style={styles.linkImage}/>
                                </Button>
                            </CardItem>
                            </Card>
                        </Content>
                        <Content >
                            <Card transparent>
                            <CardItem style={styles.card}>
                                <Button transparent onPress={()=> 
                                    {navigation.navigate("America")}}>
                                    <Image source={require('../img/Europa.png')} 
                                    transparent style={styles.linkImage}/>
                                </Button>
                            </CardItem>
                            </Card>
                        </Content>
                        <Content>
                            <Card transparent>
                            <CardItem style={styles.card}>
                                <Button transparent onPress={()=>
                                     {navigation.navigate("America")}}>
                                    <Image source={require('../img/Mundo.png')} 
                                    transparent style={styles.linkImage} />
                                </Button>
                            </CardItem>
                            </Card>
                        </Content>
                    </Row>
               </Col>
           </Grid>*/