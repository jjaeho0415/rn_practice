import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Button, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import LogoTitle from './src/components/LogoTitle';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeTabs from './src/screens/HomeTabs';
import useAuthStore from './store/useAuthStore';

const Stack = createNativeStackNavigator();

const App = () => {
  const { hasHydrated, isLogin } = useAuthStore();

  if (!hasHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <Stack.Group>
            <Stack.Screen name='Home' component={HomeTabs} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name='Profile' component={ProfileScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
