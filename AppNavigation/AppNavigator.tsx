import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import Chat from '../Screens/Chat';

export type RootStackParamList = {
  Home: undefined;
  Chats: {
    name: string;
    email: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name='Chats' component={Chat} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
