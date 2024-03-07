import {StyleSheet, SafeAreaView, Button, Platform} from 'react-native';
import React from 'react';
import {SCREENS} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {authorize} from 'react-native-app-auth';
//hungmanh14042001@gmail.com
const config = {
  serviceConfiguration: {
    authorizationEndpoint:
      'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  },
  clientId: 'cfce8715-42fc-473b-9106-b4dcac16014b',
  redirectUrl: Platform.select({
    android: 'msauth://com.reactnativejest/ZyQno6t2zOJ8MS2zyGfIqWrqAxs%3D',
    ios: 'msauth.com.reactnativejest://auth/',
  }),
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};

const HomeScreen = () => {
  const {navigate} = useNavigation();

  const loginMicrosoft = async () => {
    try {
      // console.log("vao day")
      const authState = await authorize(config);
      console.log('🚀 ~ loginMicrosoft ~ authState:', authState);
    } catch (error) {
      // console.log('vao day eee');
      console.log('error', error);
    }
  };
  // Log in to get an authentication token

  return (
    <SafeAreaView style={styles.container}>
      {Object.keys(SCREENS).map((key, index) => {
        const screenName = SCREENS[key];
        if (screenName === 'Home') {
          return null;
        }
        return (
          <Button
            title={screenName}
            color={'red'}
            key={index}
            onPress={() => navigate(screenName)}
          />
        );
      })}

      <Button title="Login Microsft" color={'red'} onPress={loginMicrosoft} />
      {/* <Button title="Counter" color={'green'} />
      <Button title="Video" color={'blue'} /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
