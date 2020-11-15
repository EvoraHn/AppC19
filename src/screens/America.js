
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

const America = ({navigation}) => {
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
                                        <CardItem cardBody style={{alignItems:"center",alignContent:"center",justifyContent:"center"}} >
                                            <Button transparent onPress={()=> {navigation.navigate("America")}}>
                                                <Image source={require('../img/america.png')} transparent style={styles.linkImage} />
                                            </Button>
                                        </CardItem>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content >
                            <Card transparent>
                                <CardItem style={styles.card}>
                                    <Body style={{alignItems:"center"}}>
                                        <CardItem cardBody style={{alignItems:"center",alignContent:"center",justifyContent:"center"}} >
                                            <Button transparent onPress={()=> {navigation.navigate("America")}}>
                                                <Image source={require('../img/Asia.png')} transparent style={styles.linkImage} />
                                            </Button>
                                        </CardItem>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content >
                            <Card transparent>
                                <CardItem style={styles.card}>
                                    <Body style={{alignItems:"center"}}>
                                        <CardItem cardBody style={{alignItems:"center",alignContent:"center",justifyContent:"center"}} >
                                            <Button transparent onPress={()=> {navigation.navigate("America")}}>
                                                <Image source={require('../img/Europa.png')} transparent style={styles.linkImage} />
                                            </Button>
                                        </CardItem>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content>
                            <Card transparent>
                                <CardItem style={styles.card}>
                                    <Body style={{alignItems:"center"}}>
                                        <CardItem cardBody style={{alignItems:"center",alignContent:"center",justifyContent:"center"}} >
                                            <Button transparent onPress={()=> {navigation.navigate("Results")}}>
                                                <Image source={require('../img/Mundo.png')} transparent style={styles.linkImage} />
                                            </Button>
                                        </CardItem>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content>
                            <Card transparent>
                                <CardItem style={styles.card}>
                                    <Body style={{alignItems:"center"}}>
                                        <CardItem cardBody style={{alignItems:"center",alignContent:"center",justifyContent:"center"}} >
                                            <Button transparent onPress={()=> {navigation.navigate("Home")}}>
                                                <Image source={require('../img/homeOscuro.png')} transparent style={styles.linkImage} />
                                            </Button>
                                        </CardItem>
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
                        <CardItem >
            
                            <Left>
                                <Text style={styles.listItem}>Honduras</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>USA</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Brazil</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Canadá</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Perú</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Ecuador</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>México</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Chile</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Colombia</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Panamá</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Argentina</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Cuba</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Costarica</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Guatemala</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>El Salvador</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
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
        backgroundColor:'#7800B8',
    },
    card:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
    },
    grid:{
        marginTop: height*0.015,
        marginBottom:height*0.015,
        alignItems:"center",
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
    
    version:{
        marginTop:height * 0.15,
        //marginRight:width*.40,
        //marginLeft:width*.25,
        fontFamily: "FredokaOne-Regular",
        fontSize:30,
    },
    linkImage:{
        width: width * .15,
        height: height * .05,
        resizeMode: "contain",
        marginLeft: width*0.055,
    },
    title:{
        textAlign:"center",
        fontFamily: "FredokaOne-Regular",
        fontSize: height*.049,
        marginTop:height*.029,
        marginBottom:height*.029
    },
    listItem:{
        fontFamily: "FredokaOne-Regular",
        fontSize: 20,
        marginLeft:width*.05,
        marginRight:width*.05,

    },
    

    

});
export default America;

/*import React from "react";
import{StyleSheet,Dimensions} from "react-native";

import{Image,Container,Text,Grid,Col,Row,Content,Card,CardItem,Body,Icon,Right,Button} from "native-base";

import{useFonts,Raleway_200ExtraLight}from "@expo-google-fonts/raleway";
import { AppLoading } from "expo";

//Obtener los valores por destructuring
const { width, height } = Dimensions.get("window");

const America = ({navigation}) => {
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
                        <Content >
                            <Card transparent >
                                <CardItem style={styles.card}>
                                    <Body style={{alignItems:"center"}}>
                                        <CardItem cardBody style={{alignItems:"center",alignContent:"center",justifyContent:"center"}} >
                                        
                                                <Button transparent onPress={()=> {navigation.navigate("America")}}>
                                                   
                                                </Button>
                                            
                                        </CardItem>
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
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Honduras</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Brazil</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Canadá</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Peru</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Ecuador</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Mexico</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Colombia</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Panama</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Argentina</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Cuba</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Costarica</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>Guatemala</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Icon active name="logo-googleplus" />
                            <Text style={styles.listItem}>El Salvador</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        
                    </Card>
               </Content>

           </Container>
        </Container>
    );
};


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
        paddingTop:height*0.03,
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
        marginTop: height*0.015,
        marginBottom:height*0.015,
        alignItems:"center",
        //backgroundColor:'#78ff35',
    },
    title:{
        marginLeft:width*.30,
        fontFamily: "FredokaOne-Regular",
        fontSize: height*.049,
        marginTop:height*.029,
        marginBottom:height*.029
    },
    listItem:{
        fontFamily: "FredokaOne-Regular",
        fontSize: 20,
        marginLeft:width*.05,

    },
});
export default America;*/