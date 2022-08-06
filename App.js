import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from './componentes/TelaInicio/';
import TelaCatalogo from './componentes/TelaCatalogo/';
import TelaContato from './componentes/TelaContato/';

const Tabs = createBottomTabNavigator();

export default function App() {
 return (
   <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name="Início" component={TelaInicial}/>
      <Tabs.Screen name="Catálogo" component={TelaCatalogo}/>
      <Tabs.Screen name="Contato" component={TelaContato}/>
    </Tabs.Navigator>
   </NavigationContainer>
  );
}