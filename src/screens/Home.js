
import React from "react";
import
    {StyleSheet,View,FlatList,Image,Dimensions} 
from "react-native";

import {Form,Item,Container,Header,Input, Icon, Button, Text,
    Body,Footer, Left,Title, Right,Col, Row, Grid

}
from "native-base"


//Obtener los valores por destructuring
const { width, height } = Dimensions.get("window");

const Home = () => {
    return (
       /* <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
            <View style={{
            width: 100, height: 50, 
            backgroundColor: 'powderblue',
            flex: 0.10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',}} >
            
           



            </View>

            <View style={{
            width: 100, height: 50, 
            backgroundColor: 'skyblue',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',}} >

                    



            </View>

                    
            <View style=
            {{width: 100, height: 50, 
                backgroundColor: 'steelblue',
                flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',}} >



            </View>
        </View>*/





    <Container>
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Left>
           
            <Right>
            </Right>
        </Header>
        <Body>
            <Text>Hello Covid</Text>
            
          <Item>
            <Input placeholder="Search" />
            <Icon name="ios-search" />
            
          </Item>
          <Grid>
                <Col>
                    <Row style Row>
                        <Text>IMAGEN 1</Text><Text>IMAGEN 2</Text><Icon name='menu' />
                    </Row>
                    <Row>
                        <Text>IMAGEN 1</Text><Text>IMAGEN 2</Text>
                    </Row>
                </Col>
            </Grid>
        
        </Body>
        <Footer>

        </Footer>


     
        
        
    </Container>
      );
  };
  

const styles = StyleSheet.create({
     container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    logoApp: {
        width: width,
        height: height * 0.15,
        resizeMode: "contain"
      },
    Row:
    {
        width: width*0.60,
        height: height*0.60,
        resizeMode: "contain",
        margin: width*0.50



    },
    Grid:{
        alignItems:"center",
    }



});
export default Home;