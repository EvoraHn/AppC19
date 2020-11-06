
import React from "react";
import { connectStyle } from 'native-base';
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

const Home = () => {
    let [fontsLoaded,error] = useFonts({
        Raleway_200ExtraLight,
        "FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
        "Gumy_Monster":require("../../assets/fonts/Gumy_Monster.ttf"),

    });
    if (!fontsLoaded){
        return <AppLoading/>
    }

    return (

    <Container style= {styles.container}>
                <Button transparent style={styles.menu} >
                    <Icon name='menu' />
                </Button>
            
            
        
        <Body>
            <Text style={styles.title} >Hello!</Text>
            <H1 style={styles.subtitle}>Covid</H1>


                
                                
                                            <Item style={styles.searchbar}>
                                                <Input placeholder="Buscar" />
                                                <Icon name="search" />
                                            </Item>
                                        
                
                    
          <Grid>
                <Col>
                    <Row > 
                        <Content  >
                            
                            <Card transparent>
                                <CardItem style={styles.link} >
                                <Body >
                                    
                                    <Text >
                                        fourth place, asdashdashduidhcduiudiscnduchnudicyidscsdcsdcsdcsdcdscsdcdsc
                                        First place 
                                    </Text>
                                    
                                </Body>
                                </CardItem>
                            </Card>
                        </Content>

                        <Content >
                            <Card transparent>
                                <CardItem style={styles.link}>
                                <Body>
                                    <Text>
                                        Second place
                                    </Text>
                                </Body>
                                </CardItem>
                            </Card>
                        </Content>

                    </Row>

                    <Row style Row>
                        
                        <Content  >
                            
                            <Card transparent>
                                <CardItem style={styles.link} >
                                <Body >
                                    
                                    <Text >
                                        third place 
                                    </Text>
                                    
                                </Body>
                                </CardItem>
                            </Card>
                        </Content>

                        <Content >
                            <Card transparent>
                                <CardItem style={styles.link}>
                                <Body>
                                    <Text>
                                        fourth place, asdashdashduidhcduiudiscnduchnudicyidscsdcsdcsdcsdcdscsdcdsc
                                    </Text>
                                </Body>
                                </CardItem>
                            </Card>
                        </Content>

                    </Row>
                    
                </Col>
            </Grid>
        
        </Body>
        <Footer transparent/>

        
 
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
        marginTop: 50,
        fontSize: 100,
        color: '#333333',
        fontFamily: "FredokaOne-Regular",
    },
    subtitle:{
        marginTop:5,
        fontSize: 30,
        color: '#333333',
        fontFamily: "FredokaOne-Regular",
        marginBottom: 100,
    },
    header:{
        backgroundColor: 'white',
        
    },
    menu:{
        marginTop:5,
        color: 'purple',
        resizeMode:'stretch',
        width:50,
        height:50,
    },
    searchbar:{
        height:30,
        marginRight:40,
        marginLeft:40,
        //backgroundColor:'red',
        borderRadius:20,
        //borderColor:'purple',

    },
    link:{
        resizeMode:'cover',
        marginLeft:10,
        marginRight:10,
        marginBottom:5,
        marginTop:5,
        borderRadius: 20,
        backgroundColor:'red',
        
    }

});
export default Home;
/*
<Grid >
                    <Col >
                        <Row >
                            <Content >
                                <Card transparent>
                                    <CardItem >
                                        <Body >
                                            <Item>
                                                <Input placeholder="Buscar" />
                                                <Icon name="search" />
                                            </Item>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Content>
                        </Row>
                    </Col>
                </Grid>
                */