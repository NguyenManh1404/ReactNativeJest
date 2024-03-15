//yarn jest LoginScreen.test.tsx

import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import LoginScreen from '../src/screens/LoginScreen';
import {loginWithEmail} from '../src/api/auth';
import AuthButton from '../src/components/AuthButton';
import SocialButton from '../src/components/SocialButton';
import {Linking} from 'react-native';

//Change text login input and collect value
describe('Change text login input and collect value', () => {
  it('change text email and password', () => {
    const {getByTestId} = render(<LoginScreen />);

    // use fireEvent change value TextInput
    fireEvent.changeText(getByTestId('emailInput'), 'manh@gmail.com');
    fireEvent.changeText(getByTestId('passwordInput'), 'manh123');

    // use toEqual check value TextInput
    expect(getByTestId('emailInput').props.value).toEqual('manh@gmail.com');
    expect(getByTestId('passwordInput').props.value).toEqual('manh123');
  });
});

//test api login success
const defaultUserSuccess = {
  email: 'manh@gmail.com',
  password: 'manh123',
};

describe('Test login api function success', () => {
  it('Login success with default user', async () => {
    const res = await loginWithEmail(defaultUserSuccess);
    expect(res?.data?.message).toBe('Login successful');
  });

  it('Login success and return success user', async () => {
    const res = await loginWithEmail(defaultUserSuccess);
    expect(res?.data?.users?.email).toBe('manh@gmail.com');
  });
});

//test api login failure
const defaultNotUser = {
  email: 'notmanh@gmail.com',
  password: 'manh123',
};

const defaultUserPassFail = {
  email: 'manh@gmail.com',
  password: 'notmanh123',
};

describe('Test login api function fail', () => {
  it('Login fail with user not exit', async () => {
    const res = await loginWithEmail(defaultNotUser);
    expect(res?.errors?.message).toBe('User do not exist');
  });

  it('Login fail and return success user', async () => {
    const res = await loginWithEmail(defaultUserPassFail);
    expect(res?.errors?.message).toBe('Password is not match');
  });
});

//Test Can click to Login button
describe('Can click to Login button', () => {
  const onPressMock = jest.fn();
  test('Can click to Login button', () => {
    const {getByTestId} = render(
      <AuthButton onPress={onPressMock} label={'Login'} />,
    );
    const label = getByTestId('AuthButton');
    fireEvent.press(label);
    expect(onPressMock).toHaveBeenCalled();
  });
});

//Test Can click to instagram button
describe('Can click to instagram button', () => {
  test('should open the instagram link when the instagram link is pressed', () => {
    const {getByTestId} = render(
      <SocialButton
        type="instagram"
        label="John Doe's Instagram"
        link="<https://instagram.com/>"
        testID="socialInstagramButton"
      />,
    );

    const label = getByTestId('socialInstagramButton');
    fireEvent.press(label);
    expect(Linking.openURL).toHaveBeenCalledWith('<https://instagram.com/>');
  });
});
