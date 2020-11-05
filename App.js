import React from "react";
 //enlaces a las paginas o pantallas
import Home from "./src/screens/Home";
import About from "./src/screens/about";
//import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";

//const Stack = createStackNavigator();
// Navegación en pilas


//dentro de la función se colocan todos los accesos (enlaces) a las paginas que queremos abrir
function App() 
{
  //return (<Home></Home>)
 return(<About></About>)
}
export default App;
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