import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screens/Login';
import TelaPrincipal from './screens/Principal'
import Cadastro from '../FinFinancas/screens/Cadastro';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />    
      <Stack.Screen name="Principal" component={TelaPrincipal}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      
    </Stack.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )

}

