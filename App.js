import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import TelaInicial from './componentes/TelaInicio/';
import TelaCatalogo from './componentes/TelaCatalogo/';
import TelaContato from './componentes/TelaContato/';

const Tabs = createBottomTabNavigator();

export default function App() {
 return (
   <NavigationContainer>
    <Tabs.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#400303'
        },
        headerTitleStyle:{
          color:'#fff',
          fontWeight:'bold',
        },
        headerTitleAlign:'center',

        tabBarStyle:{
          backgroundColor:'#fff'
        },
        tabBarLabelStyle:{
          fontSize: 14,
          fontWeight:'bold'
        },
        tabBarActiveBackgroundColor:'#400303',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ab887c'
      }}>

      <Tabs.Screen 
        name="Início" 
        component={TelaInicial}
        options={{
          tabBarIcon:({ color })=>(
            <Entypo name="home" size={20} color={ color }/>
          )
        }}
      />

      <Tabs.Screen 
        name="Catálogo" 
        component={TelaCatalogo}
        options={{
          tabBarIcon:({ color })=>(
            <FontAwesome5 name="wine-bottle" size={20} color={ color }/>
          )
        }}
      />

      <Tabs.Screen 
        name="Contato" 
        component={TelaContato}
        options={{
          tabBarIcon:({ color })=>(
            <AntDesign name="contacts" size={20} color={ color }/>
          )
        }}
      />

    </Tabs.Navigator>
   </NavigationContainer>
  );
}