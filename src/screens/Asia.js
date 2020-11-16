import React from "react";
import {StyleSheet,Image,Dimensions} 
from "react-native";
import {Container,Icon,Button,Text,Body,Left,Right,
    Col,Row,Grid,Content,Card,CardItem,}
from "native-base"
import{useFonts,Raleway_200ExtraLight}
from "@expo-google-fonts/raleway";
import { AppLoading } 
from "expo";

//Obtener los valores por destructuring altura y ancho
const { width, height } = Dimensions.get("window");

const Asia = ({navigation}) => {
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
                    onPress={()=> {navigation.navigate("Europa")}}>
                    <Image source={require('../img/Europa.png')}
                        transparent style={styles.linkImage} />
                    </Button>
                </CardItem>
                </Card>

                <Card transparent >
                <CardItem style={styles.card}>
                    <Button transparent 
                    onPress={()=> {navigation.navigate("Results",{
                        country:'World',region:'World',imgRoute:'World'})}}>
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
               <Text style={styles.title}>
                   Asia
               </Text>
               <Content >
                    <Card transparent >
                        <CardItem>
            
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Iran',region:'Asia',
                                    imgRoute:'Asia'})}}>Iran</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'India',region:'Asia',
                                    imgRoute:'Asia'})}}>
                                    India</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Saudi Arabia',region:'Asia',
                                    imgRoute:'Asia'})}}>Saudi Arabia</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Pakistan',region:'Asia',
                                    imgRoute:'Asia'})}}>Pakistan</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Singapore',region:'Asia',
                                    imgRoute:'Asia'})}}>Singapore</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Israel',region:'Asia',
                                    imgRoute:'Asia'})}}>Israel</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Japan',region:'Asia',
                                    imgRoute:'Asia'})}}>Japan</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Qatar',region:'Asia',
                                    imgRoute:'Asia'})}}>Qatar</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'S.Korea',region:'Asia',
                                    imgRoute:'Asia'})}}>S.Korea</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Thailand',region:'Asia',
                                    imgRoute:'Asia'})}}>Thailand</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Taiwan',region:'Asia',
                                    imgRoute:'Asia'})}}>Taiwan</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Mongolia',region:'Asia',
                                    imgRoute:'Asia'})}}>Mongolia</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=> {
                                    navigation.navigate("Results",{
                                    country:'Yemen',region:'Asia',
                                    imgRoute:'Asia'})}}>Yemen</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=> {
                                    navigation.navigate("Results",{
                                    country:'China',region:'Asia',
                                    imgRoute:'Asia'})}}>China</Text>
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
        paddingBottom:30,
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
    linkImage:{
        width: width * .15,
        height: height * .05,
        resizeMode: "contain",
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
    }
    

    

});
export default Asia;