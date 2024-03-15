import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AuthTitle from '../components/AuthTitle';
import CustomTextInput from '../components/CustomTextInput';
import SocialButton from '../components/SocialButton';
import {loginWithEmail} from '../api/auth';
import ButtonCustom from '../components/ButtonCustom';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

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

  const onSecure = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthTitle />
      <View style={styles.inputContainer}>
        <CustomTextInput
          testID="emailInput"
          title="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          secureTextEntry={false}
        />

        <View>
          <CustomTextInput
            testID="passwordInput"
            title="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            keyboardType="default"
            secureTextEntry={secureTextEntry}
          />
        </View>
        <TouchableOpacity
          style={styles.clickHide}
          onPress={onSecure}
          testID="hidenBtn">
          <Text style={styles.textHide}>
            {secureTextEntry ? 'Hide' : 'See'}
          </Text>
        </TouchableOpacity>
      </View>

      <ButtonCustom
        testID="loginNow"
        title={'Login Now'}
        onPress={handleLogin}
      />

      <View style={styles.viewSocial}>
        <SocialButton
          type="twitter"
          label="Twitter"
          link="https://twitter.com/"
          testID="socialTwitterButton"
        />
        <SocialButton
          type="instagram"
          label="Instagram"
          link="https://www.instagram.com/"
          testID="socialInstagramButton"
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  clickHide: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  textHide: {
    fontWeight: 'bold',
    fontSize: 15,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewSocial: {
    flexDirection: 'row',
    width: '60%',
    marginTop: 20,
  },
});
