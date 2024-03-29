import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SocialButton from './src/components/SocialButton';
import CustomTextInput from './src/components/CustomTextInput';
import AuthTitle from './src/components/AuthTitle';
import {loginWithEmail} from './src/api/auth';

const App = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    const {testLogin} = props;

    if (testLogin) {
      testLogin(data);
    }

    loginWithEmail(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthTitle />
      <View style={styles.inputContainer}>
        <CustomTextInput
          testID="email"
          title="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          secureTextEntry={false}
        />

        <CustomTextInput
          testID="password"
          title="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          keyboardType="default"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        testID="btnLogin">
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.viewSocial}>
        <SocialButton
          type="twitter"
          label="Twitter"
          link="https://twitter.com/"
        />
        <SocialButton
          type="instagram"
          label="Instagram"
          link="https://www.instagram.com/"
        />
      </View>
    </SafeAreaView>
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
