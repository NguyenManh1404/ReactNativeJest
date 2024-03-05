import {StyleSheet, Pressable, Text} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CounterScreen from './src/screens/CounterScreen';

const HeaderLeft = () => {
  const navigation = useNavigation();
  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <Pressable
      testID={'go-back-home-button'}
      onPress={() => navigation.goBack()}>
      <Text style={{fontSize: 24}}>←</Text>
    </Pressable>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Counter: undefined;
};

export const SCREENS: Record<string, keyof RootStackParamList> = {
  HOME: 'Home',
  LOGIN: 'Login',
  COUNTER: 'Counter',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputTitle: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewSocial: {
    flexDirection: 'row',
    width: '60%',
    marginTop: 20,
  },
});
