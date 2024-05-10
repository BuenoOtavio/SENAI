import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Buscar from './screens/Tela2';
import Contato from './screens/Tela3';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#111111"
        inactiveColor="#000000"
        barStyle={{ backgroundColor: '#F8F8F8' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={26} />
            ),
          }}
        />
       
        <Tab.Screen
          name="Search"
          component={Buscar}
          options={{
            tabBarLabel: '1º Trilogia',
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={Contato}
          options={{
            tabBarLabel: '2º Trilogia',
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}