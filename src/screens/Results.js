import React,{  useState, useEffect} from "react";
import {StyleSheet,Image,Dimensions} 
from "react-native";
import {Container,Text,Left, Right,Content,Card,CardItem,Spinner}
from "native-base"
import{useFonts,Raleway_200ExtraLight}
from "@expo-google-fonts/raleway";
import { AppLoading } 
from "expo";
//Obtener los valores por destructuring altura y ancho
const { width, height } = Dimensions.get("window");
//Librerias de conexion
import backend from "../api/backend";


const Results = ({route,navigation}) => {
    //maneja el estado de la informacion de covid en las peticiones
    const [casosEnElMundo, setcasosEnElMundo] = useState(null);
    
    const [muertesEnElMundo, setmuertesEnElMundo] = useState(null);
    //const [errorConsultaMuertes, seterrorConsultaMuertes] = useState(false); //variable para el estado del try catch

    const [recuperadosEnElMundo, setrecuperadosEnElMundo] = useState(null);
    //const [errorConsultaRecuperados, seterrorConsultaRecuperados] = useState(false); //variable para el estado del try catch

    const [errorConsulta, seterrorConsulta] = useState(false); //variable para el estado del try catch

    //variables de la pantalla Dinamica
    const {country} = route.params;
    const {region} = route.params;
    const {imgRoute} = route.params;
  
        //fuentes de origen externo
        let [fontsLoaded,error] = useFonts({
            Raleway_200ExtraLight,
            "FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
        });
      
    ///=================================== consultas =====================================

    //Peticiones ------ Casos EN EL MUNDO -------
        
        // Las peticiones se hacen mediante funciones asincronas(cualquier momento)
        const getcasosEnElMundo = async () => {
            try {
                //Consultar a la API de Covid19
                //nuestros valores para este backend Traer la información de el mundo
                const response = await backend.get(`cases?country=${country}`); 
                // aqui la variable de estado ya recibio los valores de la peticion
                setcasosEnElMundo(response.data);        
            } catch (errorConsulta) {
                //errorConsulta al momento de ejecutar la peticion
                seterrorConsulta(true);
            }
        };
        
        const getmuertesEnElMundo = async () => {
            try {
                const response = await backend.get(`deaths?country=${country}`); 
                setmuertesEnElMundo(response.data);    
            } catch (errorConsulta) {
                seterrorConsulta(true);
            }
        };

        const getrecuperadosEnElMundo = async () => {
            try {
                const response = await backend.get(`recovered?country=${country}`); 
                setrecuperadosEnElMundo(response.data);     
            } catch (errorConsulta) {
                seterrorConsulta(true);
            }
        };

                // Efecto secundario que ejecuta la consulta a la API
        useEffect(() => {
            getcasosEnElMundo();
            getmuertesEnElMundo();
            getrecuperadosEnElMundo();
        }, []);

        //los componentes se renderizan antes de ser mostrados y nunca
        //deben retornar null
        if (!casosEnElMundo) {
            return (
              <Content>
                <Spinner/>
              </Content>
            )
          }
          if (!muertesEnElMundo) {
            return (
              <Content>
                <Spinner/>
              </Content>
            )
          }
          if (!recuperadosEnElMundo) {
            return (
              <Content>
                <Spinner/>
              </Content>
            )
          }
        if (!fontsLoaded){
            return <AppLoading/>
        }
    return (
        <Container style ={styles.containerPrincipal}>
            <CardItem style={styles.backgroundColor} > 
                <Left>
                    <Text style={styles.title}>{region}</Text>
                </Left>   
                
                <Right>
                    <Image source={require('../img/america.png')}
                     transparent style={styles.linkImage} />
                </Right>
            </CardItem>
            <CardItem style={styles.backgroundColor}>
                <Left>
                    <Text style={styles.subTitle}>{country}</Text>
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
                                <Text>{casosEnElMundo[0].data}</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>recovered</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text>{recuperadosEnElMundo[0].data}</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>dead</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text>{muertesEnElMundo[0].data}</Text>
                                
                            </Left> 
                        </CardItem>
                    </Card>
               </Content>

           </Container>
           <CardItem style={styles.backgroundColor}>
               <Left>
                   <Text style={{color:'#fff'}}>
                       updated results in the palm of your hand!
                   </Text>

               </Left>
               <Right>
                    <Image source={require(`../img/${Ruta_Imagen}.png`)} 
                    transparent style={styles.linkImage} />
               </Right>
           </CardItem>
        </Container>
      );
  };


  //Aqui va la hoja de estilos, cualquier elemento linkeado aquí
  //se verá afectado por las propiedades contenidas
  //para linkear "en cualquier elemento"
  //<Elemento style={{styles.container> </Elemento>}}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        borderRadius: 35,
        backgroundColor:'white',
        marginBottom: height*0.001,
        paddingBottom:height*0.04,
    },
    containerPrincipal: {
        flex:1,
        paddingTop:height*0.04,
        paddingBottom:height*0.009,
        backgroundColor:'#14213D',
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
        //fontSize: height*.069,
        fontSize: 50,
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
    backgroundColor:{
        backgroundColor:'#14213D',
    } 
});
export default Results;