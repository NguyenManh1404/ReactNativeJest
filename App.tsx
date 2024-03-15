import {StyleSheet, Pressable, Text} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CounterScreen from './src/screens/CounterScreen';
import ListScreen from './src/screens/ListScreen';
import VideoScreen from './src/screens/VIdeoScreen';

const HeaderLeft = () => {
  const navigation = useNavigation();
  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <Pressable
      testID={'go-back-home-button'}
      onPress={() => navigation.goBack()}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Back</Text>
    </Pressable>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Counter: undefined;
  List: undefined;
  Video: undefined;
};

export const SCREENS: Record<string, keyof RootStackParamList> = {
  HOME: 'Home',
  LOGIN: 'Login',
  COUNTER: 'Counter',
  LIST: 'List',
  VIDEO: 'Video',
};
export const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerLeft: HeaderLeft,
        }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
        <Stack.Screen name={SCREENS.COUNTER} component={CounterScreen} />
        <Stack.Screen name={SCREENS.LIST} component={ListScreen} />
        <Stack.Screen name={SCREENS.VIDEO} component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
