import React from "react";
import {StyleSheet,Image,Dimensions} 
from "react-native";
import {Container,Icon,Button,Text,Left,Right,
    Content,Card,CardItem,}
from "native-base"
import{useFonts,Raleway_200ExtraLight}
from "@expo-google-fonts/raleway";
import { AppLoading } 
from "expo";

//Obtener los valores por destructuring altura y ancho
const { width, height } = Dimensions.get("window");

const Europa = ({navigation}) => {
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
                   Europa
               </Text>
               <Content >
                    <Card transparent >
                        <CardItem>
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Spain',region:'Europa',
                                    imgRoute:'Europa'})}}>Spain</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Italy',region:'Europa',
                                    imgRoute:'Europa'})}}>
                                    Italy</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'UK',region:'Europa',
                                    imgRoute:'Europa'})}}>United Kingdom</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'France',region:'Europa',
                                    imgRoute:'Europa'})}}>France</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Germany',region:'Europa',
                                    imgRoute:'Europa'})}}>Germany</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Belgium',region:'Europa',
                                    imgRoute:'Europa'})}}>Belgium</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Netherlands',region:'Europa',
                                    imgRoute:'Europa'})}}>Netherlands</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Switzerland',region:'Europa',
                                    imgRoute:'Europa'})}}>Switzerland</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Portugal',region:'Europa',
                                    imgRoute:'Europa'})}}>Portugal</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Sweden',region:'Europa',
                                    imgRoute:'Europa'})}}>Sweden</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Ireland',region:'Europa',
                                    imgRoute:'Europa'})}}>Ireland</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=>{
                                    navigation.navigate("Results",{
                                    country:'Austria',region:'Europa',
                                    imgRoute:'Europa'})}}>Austria</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem} onPress={()=> {
                                    navigation.navigate("Results",{
                                    country:'Lithuania',region:'Europa',
                                    imgRoute:'Europa'})}}>Lithuania</Text>
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
        fontSize:10,
    },
    version:{
        marginTop:40,
        marginLeft:width*.25,
        fontFamily: "FredokaOne-Regular",
        fontSize:30,
    },
    container: {
        flex:10,
        justifyContent:"center",
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
export default Europa;
