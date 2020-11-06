
import React
from "react";
import {StyleSheet,Image,Dimensions} 
from "react-native";
import {Container,Content,Card,CardItem}
from "native-base"
import{useFonts,Raleway_200ExtraLight}
from "@expo-google-fonts/raleway";
import { AppLoading } 
from "expo";

//Obtener los valores por destructuring altura y ancho
const { width, height } = Dimensions.get("window");

const Splash = () => {
    //fuentes de origen externo
    let [fontsLoaded,error] = useFonts({
        Raleway_200ExtraLight,
        "FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
    });
    if (!fontsLoaded){
        return <AppLoading/>
    }
    return (
        
        <Container style={styles.container} >
            <Content >
                <Card transparent >
                    <CardItem cardBody >
                        <Image source={require('../img/logo.png')} style={styles.img} />
                    </CardItem>
                </Card>
            </Content>      
        </Container>

   
      );
  };
  

const styles = StyleSheet.create
({

    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 35,
        //backgroundColor: 'red',
        paddingTop:150,
    },
    logoApp: {
        width: width,
        height: height * 0.15,
        resizeMode: "contain",
        
    },
    img:{
        
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 35,
        //backgroundColor: 'yellow',
        width: width * .90,
        height: height * .60,
        resizeMode: "contain",
    },
});
export default Splash;