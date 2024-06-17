import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Home from './screens/Home';
import Buscar from './screens/Buscar';
import Indicacoes from './screens/Indicacoes';
import Contato from './screens/Contato';
import Destaques from './screens/Destaques';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#660000"
        inactiveColor="#000000"
        barStyle={{ backgroundColor: '#f44336' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
       
       <Tab.Screen
          name="Destaques"
          component={Destaques}
          options={{
            tabBarLabel: 'Destaques',
            tabBarIcon: ({ color }) => (
              <AntDesign name="videocamera" size={26} color={color} />
            ),
          }}
        />
       
       <Tab.Screen
          name="Indicacoes"
          component={Indicacoes}
          options={{
            tabBarLabel: 'Indicações',
            tabBarIcon: ({ color }) => (
              <AntDesign name="star" size={26} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={Buscar}
          options={{
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Contact"
          component={Contato}
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color }) => (
              <AntDesign name="phone" size={26} color={color} />
            ),
          }}
        />
        
        
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}
