import React from "react";
 //enlaces a las paginas o pantallas
import Home from "./src/screens/Home";
import About from "./src/screens/about";
import Splash from "./src/screens/splash";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
// Navegación en pilas


//dentro de la función se colocan todos los accesos (enlaces) a las paginas que queremos abrir
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pantalla Principal" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
     )
}
//return (<Home></Home>)
 //return(<Splash></Splash>)
 //return(<About></About>)
/*
(
  <NavigationContainer>
    <Stack.NavigationContainer>
    <Stack.Navigator inicialRouteName="Home">
      <Stack.Screen name ="Home" component={Home}/>
    </Stack.Navigator>
  </Stack.NavigationContainer>

  </NavigationContainer>
  
)*/
//"react-navigation": "^4.4.3"