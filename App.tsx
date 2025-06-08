import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import BurialScreen from './src/screens/BurialScreen';
import BreederScreen from './src/screens/BreederScreen';
import AccessoryScreen from './src/screens/AccessoryScreen';
import ConsultScreen from './src/screens/ConsultScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Burial' component={BurialScreen} />
        <Stack.Screen name='Breeder' component={BreederScreen} />
        <Stack.Screen name='Accessory' component={AccessoryScreen} />
        <Stack.Screen name='Consult' component={ConsultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
