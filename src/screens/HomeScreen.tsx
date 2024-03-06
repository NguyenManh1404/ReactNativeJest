import {StyleSheet, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {SCREENS} from '../../App';
import {useNavigation} from '@react-navigation/native';
import AzureAuth from 'react-native-azure-auth';
// import {AzureInstance, AzureLoginView} from 'react-native-azure-ad-2';

const HomeScreen = () => {
  const {navigate} = useNavigation();

  //hungmanh14042001@gmail.com

  const azureAuth = new AzureAuth({
    clientId: 'e274f223-1e99-484f-96c1-4eaa3d0c27fc',
    // tenant: 'f8cdef31-a31e-4b4a-93e4-5f571e91255a',
    redirectUri: 'mastermeal://auth',
    // redirectUri: 'com.reactnativejest://auth/android/callback',
  });

  // const credentials = {
  //   client_id: 'e274f223-1e99-484f-96c1-4eaa3d0c27fc',
  //   client_secret: '3GV8Q~km-63qe-GEp5ZngG3kpmJye8FS3j-Ymc-d',
  //   scope: 'User.ReadBasic.All Mail.Read offline_access', //access scope for login - see http://bit.ly/2gtQe9W for more info
  // };

  // const azureInstance = new AzureInstance(credentials);

  // const onLoginSuccess = () => {
  //   azureInstance
  //     .getUserInfo()
  //     .then(result => {
  //       console.log(result);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  const loginWithAzureAuth = async () => {
    try {
      // await logout();
      let tokens = await azureAuth.webAuth.authorize({
        scope: 'openid profile User.Read Mail.Read',
        prompt: 'login',
      });

      console.log('tokens.accessToken', tokens.accessToken);
      // this.setState({accessToken: tokens.accessToken});
      // let info = await azureAuth.auth.msGraphRequest({
      //   token: tokens.accessToken,
      //   path: '/me',
      // });
      // this.setState({user: info.displayName, userId: tokens.userId});
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await azureAuth.webAuth.clearSession();
  };
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
        title="Login Microsoft"
        color={'red'}
        onPress={loginWithAzureAuth}
      />
     
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
