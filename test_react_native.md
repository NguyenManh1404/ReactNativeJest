# Testing React Native Documentation

resources demo: https://github.com/NguyenManh1404/ReactNativeJest/tree/auto-test-masestro

## Maestro Test UI Case

link: https://maestro.mobile.dev/

1. Install Maestro

```
brew uninstall maestro
curl -Ls "https://get.maestro.mobile.dev" | bash
```

2. Setup structure

![forEachResult](./readmeImg/maestroStruture.png)

3. Demo use

<details>
    <summary><b>Test mastro</b></summary>

```js
//LoginScreen.js
import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AuthTitle from "../components/AuthTitle";
import CustomTextInput from "../components/CustomTextInput";
import SocialButton from "../components/SocialButton";
import { loginWithEmail } from "../api/auth";
import ButtonCustom from "../components/ButtonCustom";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    const { testLogin } = props;

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
          testID="emailInput"
          title="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          secureTextEntry={false}
        />

        <CustomTextInput
          testID="passwordInput"
          title="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          keyboardType="default"
          secureTextEntry={true}
        />
      </View>

      <ButtonCustom
        testID="loginNow"
        title={"Login Now"}
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
```

```yaml
####goBackHome.yaml####
appId: org.reactjs.native.example.ReactNativeJest
---
## go back to home screen
- tapOn:
    id: ${output.screens.navigation.goBackHomeButtonTestID}



####flow.yaml####
appId: com.reactnativejest #bundle id ios and applicationId android
---
- launchApp
# load all output constants saved in the setup file
- runScript: ./setup.js

# #Testing login
- tapOn: ${output.screens.home.loginButton}
- tapOn:
    id: loginNow
- tapOn: ${output.screens.login.modalOk}
- tapOn:
    id: emailInput
- inputText: ${output.screens.login.email}
- tapOn:
    id: passwordInput
- inputText: ${output.screens.login.password}
- hideKeyboard
- tapOn:
    id: loginNow
- tapOn: ${output.screens.login.modalOk}
- runFlow: ./subFlows/goBackHome.yaml

# #Test counter

- tapOn: ${output.screens.home.counter}
- tapOn:
    id: incrementPress
    delay: 500 # (optional) Delay between taps. Default 100ms
    repeat: 3
- tapOn:
    id: incrementPress
- tapOn:
    id: incrementPress
- tapOn:
    id: incrementPress
    repeat: 3
- tapOn:
    id: decrementPress
- tapOn:
    id: decrementPress
- tapOn:
    id: decrementPress
- runFlow: ./subFlows/goBackHome.yaml

#Test scroll list

- tapOn: ${output.screens.home.list}
- scrollUntilVisible:
    element:
      id: 'item9' # or any other selector
    direction: DOWN # DOWN|UP|LEFT|RIGHT (optional, default: DOWN)
    timeout: 50000 # (optional, default: 20000) ms
    speed: 40 # 0-100 (optional, default: 40) Scroll speed. Higher values scroll faster.
    visibilityPercentage: 100 # 0-100 (optional, default: 100) Percentage of element visible in viewport
    centerElement: false # true|false (optional, default: false)
- tapOn:
    id: 'item8'
- tapOn: ${output.screens.login.modalOk}
- runFlow: ./subFlows/goBackHome.yaml



###setup.js###

output.screens = {
  navigation: {
    goBackHomeButtonTestID: 'go-back-home-button',
  },
  home: {
    loginButton: 'Login',
    counter: 'Counter',
    list: 'List',
  },
  login: {
    placeholderEmail: 'Enter your email',
    placeholderPassword: 'Enter your password',
    loginButton: 'Login',
    email: 'manh@gmail.com',
    password: 'manh123',
    submitLogin: 'Login Now',
    twitter: 'Twitter',
    modalOk: 'OK',
  },
  counter:{
    decrement: "Decrement",
    increment: "Increment",
  }
};

```

</details>

3. API Reference

```
https://maestro.mobile.dev/api-reference/commands
```

## Unit Test with @testing-library/react-native

link: https://callstack.github.io/react-native-testing-library/docs/getting-started

1. install library

```
yarn add @testing-library/jest-native
yarn add @testing-library/react-native

```

2. Go to **_jest.config.js_** on root project to configure

```javascript
module.exports = {
  preset: "@testing-library/react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"], // file type alow for testing
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
```

3. structure files for testing

![forEachResult](./readmeImg/testingStructure.png)

4. API Reference: https://callstack.github.io/react-native-testing-library/docs/api

5. command line to run tests

```js
yarn test //run add files

yarn jest file_test_name //example: yarn jest LoginScreen.test.tsx

```
