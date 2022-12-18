import  React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appbutton from './Component/Appbutton'
import WelcomeScreen from './Component/WelcomeScreen';
import SignUp from './Component/SignUp';



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
    >
      <Stack.Screen  name="Appbutton" component={Appbutton} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}