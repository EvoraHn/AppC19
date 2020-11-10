import React from "react";
import{StyleSheet,Dimensions} from "react-native";

import{Item,Container,Text,Grid,Col,Row,Content,Card,CardItem,Body,Icon,Right} from "native-base";

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
                        <Content>
                            <Card transparent >
                                <CardItem style={styles.card}>
                                    <Body>
                                        <Text>
                                            1
                                        </Text>
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
    )


}


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
        marginTop: 15,
        alignItems:"center",
        //backgroundColor:'#78ff35',
    },
    title:{
        marginLeft:width*.30,
        fontFamily: "FredokaOne-Regular",
        fontSize: 43,
    },
    listItem:{
        fontFamily: "FredokaOne-Regular",
        fontSize: 20,
        marginLeft:width*.05,

    }
})
export default America;