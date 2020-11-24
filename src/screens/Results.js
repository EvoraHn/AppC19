import React,{  useState, useEffect} from "react";
import {StyleSheet,Image,Dimensions}
from "react-native";
import {Container,Text,Left, Right,Content,Card,CardItem,Spinner, Form}
from "native-base"
import{useFonts,Raleway_200ExtraLight}
from "@expo-google-fonts/raleway";
import { AppLoading } 
from "expo";
//Obtener los valores por destructuring altura y ancho
const { width, height } = Dimensions.get("window");
//Librerias de conexion
import backend from "../api/backend";

//importar el kit de gráficos React Native para diferentes tipos de gráficos
import {
    LineChart
} from 'react-native-chart-kit';

const Results = ({route,navigation}) => {

    

    //maneja el estado de la informacion de covid en las peticiones
    const [casosDeHoyPorCovid, setcasosDeHoyPorCovid] = useState(null);

    const [casosPorCovid, setcasosPorCovid] = useState(null);
    
    const [muertesPorCovid, setmuertesPorCovid] = useState(null);
    
    const [recuperadosPorCovid, setrecuperadosPorCovid] = useState(null);

    const [criticosPorCovid, setcriticosPorCovid] = useState(null);

    const [totalPruebasPorCovid, settotalPruebasPorCovid] = useState(null);
   
     
    const [errorConsulta, seterrorConsulta] = useState(false); //variable para el estado del try catch

    //variables de la pantalla Dinamica

    // Obtener desde los parámetros de la navegación el término de búsqueda
    const {country} = route.params;
    const {region} = route.params;
    //const {imgRoute} = route.params;
  
        //fuentes de origen externo
        let [fontsLoaded,error] = useFonts({
            Raleway_200ExtraLight,
            "FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
        });
      
    ///=================================== consultas =====================================

    //Peticiones ------ CASOS de HOY -------
        
        // Las peticiones se hacen mediante funciones asincronas(cualquier momento)
        const getcasosDeHoyPorCovid = async () => {
            try {
                //Consultar a la API de Covid19
                //nuestros valores para este backend Traer la información de el mundo
                const response = await backend.get(`todayCases?country=${country}`); 
                // aqui la variable de estado ya recibio los valores de la peticion
                setcasosDeHoyPorCovid(response.data);        
            } catch (errorConsulta) {
                //errorConsulta al momento de ejecutar la peticion
                seterrorConsulta(true);
            }
        };


    //Peticiones ------ CASOS -------
        
        // Las peticiones se hacen mediante funciones asincronas(cualquier momento)
        const getcasosPorCovid = async () => {
            try {
                //Consultar a la API de Covid19
                //nuestros valores para este backend Traer la información de el mundo
                const response = await backend.get(`cases?country=${country}`); 
                // aqui la variable de estado ya recibio los valores de la peticion
                setcasosPorCovid(response.data);        
            } catch (errorConsulta) {
                //errorConsulta al momento de ejecutar la peticion
                seterrorConsulta(true);
            }
        };

          //Peticiones ------MUERTES -------
        
        const getmuertesPorCovid = async () => {
            try {
                const response = await backend.get(`deaths?country=${country}`); 
                setmuertesPorCovid(response.data);    
            } catch (errorConsulta) {
                seterrorConsulta(true);
            }
        };

          //Peticiones ------ Recuperados -------
        const getrecuperadosPorCovid = async () => {
            try {
                const response = await backend.get(`recovered?country=${country}`); 
                setrecuperadosPorCovid(response.data);     
            } catch (errorConsulta) {
                seterrorConsulta(true);
            }
        };


          //Peticiones ------ Criticos  -------
        const getcriticosPorCovid = async () => {
            try {
                const response = await backend.get(`critical?country=${country}`); 
                setcriticosPorCovid(response.data);     
            } catch (errorConsulta) {
                seterrorConsulta(true);
            }
        };

          //Peticiones ------ Total Pruebas  -------
          const gettotalPruebasPorCovid = async () => {
            try {
                const response = await backend.get(`critical?country=${country}`); 
                settotalPruebasPorCovid(response.data);     
            } catch (errorConsulta) {
                seterrorConsulta(true);
            }
        };

                // Efecto secundario que ejecuta la consulta a la API
        useEffect(() => {
            getcasosDeHoyPorCovid();
            getcasosPorCovid();
            getmuertesPorCovid();
            getrecuperadosPorCovid();
            getcriticosPorCovid();
            gettotalPruebasPorCovid();
        }, []);

        //los componentes se renderizan antes de ser mostrados y nunca
        //deben retornar null
        if (!casosDeHoyPorCovid) {
            return (
              <Content>
                <Spinner color="purple"/>
              </Content>
            )
          }

        if (!casosPorCovid) {
            return (
              <Content>
                <Spinner color="purple"/>
              </Content>
            )
          }
          if (!muertesPorCovid) {
            return (
              <Content>
                <Spinner color="purple"/>
              </Content>
            )
          }
          if (!recuperadosPorCovid) {
            return (
              <Content>
                <Spinner color="purple"/>
              </Content>
            )
          }

          if (!criticosPorCovid) {
            return (
              <Content>
                <Spinner color="purple"/>
              </Content>
            )
          }
          if (!totalPruebasPorCovid) {
            return (
              <Content>
                <Spinner color="purple"/>
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
                    <Image source={require("../img/CovidResult.png")}
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
                                <Text style={styles.listItem}>Today Cases</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text>{casosDeHoyPorCovid[0].data}</Text>
                            </Left>
                        </CardItem>

                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Infecteds</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text>{casosPorCovid[0].data}</Text>
                            </Left>
                        </CardItem>

                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Recovereds</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text>{recuperadosPorCovid[0].data}</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Deaths</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text>{muertesPorCovid[0].data}</Text>
                                
                            </Left> 
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Critical</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text>{criticosPorCovid[0].data}</Text>
                                
                            </Left> 
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text style={styles.listItem}>Total Test</Text>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Text>{totalPruebasPorCovid[0].data}</Text>
                                
                            </Left> 
                        </CardItem>
                    </Card>

                    
                    <Text style={styles.header}>Charts</Text>
                    <LineChart style={{alignContent:"center"}}
                        data={{
                        labels: ['T.C.', 'I', 'R', 'D', 'C', 'T.T.'],
                        datasets: [
                            {
                            data: [
                                casosDeHoyPorCovid[0].data,
                                casosPorCovid[0].data,
                                recuperadosPorCovid[0].data,
                                muertesPorCovid[0].data,
                                criticosPorCovid[0].data,
                                totalPruebasPorCovid[0].data,
                            ],
                            color: (opacity = 1) => `rgba(116, 0, 184, ${opacity})`,
                            },
                        ],
                        }}
                        width={Dimensions.get('window').width - 16}
                        height={220}
                        yAxisLabel={' '}
                        chartConfig={{
                        backgroundColor: '#FFFFFF',
                        backgroundGradientFrom: '#FFFFFF',
                        backgroundGradientTo: '#FFFFFF',
                        fromZero: true,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        }}
                    />


               </Content>

           </Container>
           <CardItem style={styles.backgroundColor}>
               <Left>
                   <Text style={{color:'#fff'}}>
                       updated results in the palm of your hand!
                   </Text>

               </Left>
               <Right>
                    <Image source={require('../img/logo.png')} 
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
        paddingLeft:20,
        flex:1,
        justifyContent:"center",
        borderRadius: 35,
        backgroundColor:'white',
        marginBottom: height*0.001,
        paddingBottom:height*0.04,
    },
    header: {
        textAlign: 'center',
        padding: 16,
        marginTop: 16,
        fontFamily: "FredokaOne-Regular",
        fontSize: 20,
      },
    containerPrincipal: {
        flex:1,
        paddingTop:height*0.04,
        paddingBottom:height*0.009,
        backgroundColor:'#14213D',
    },
    linkImage:{
        width: width * .30,
        height: height *.1,
        resizeMode: "contain",
        
    },
    title:{
        textAlign:"center",
        fontFamily: "FredokaOne-Regular",
        //fontSize: height*.069,
        fontSize: width*0.11,
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