import {StyleSheet, SafeAreaView, Button, Platform} from 'react-native';
import React, {useEffect} from 'react';
import {SCREENS} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {authorize} from 'react-native-app-auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
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

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '164295958787-1l4ui95m65cv7ht977nqsadlii7ocfc3.apps.googleusercontent.com',
      iosClientId: Config.GOOGLE_CLIENT_ID_IOS, // ios/MealMaster/GoogleService-info.plist
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      //profileImageSize: 150,
    });
  }, []);

  console.log(Config.GOOGLE_CLIENT_ID_ANDROID);

  const loginGoogle = async () => {
    try {
      GoogleSignin.revokeAccess();
      GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      const googleUserInfo = await GoogleSignin.signIn();
      GoogleSignin.signInSilently();

      console.log('🚀 ~ loginGoogle ~ googleUserInfo:', googleUserInfo);
    } catch (error) {
      console.log('🚀 ~ loginGoogle ~ error:', error);
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          break;
        case statusCodes.IN_PROGRESS:
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          break;
        case statusCodes.SIGN_IN_REQUIRED:
          break;
        default:
          break;
      }
    }
  };

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

      <Button
        title={'Login With Microsoft'}
        color={'red'}
        onPress={loginMicrosoft}
      />
      <Button title={'Login With Google'} color={'red'} onPress={loginGoogle} />
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
