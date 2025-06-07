import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
