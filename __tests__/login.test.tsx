import React from 'react';
import {
  render,
  waitFor,
  fireEvent,
  screen,
} from '@testing-library/react-native';
import {Linking} from 'react-native';
import AuthTitle from '../src/components/AuthTitle';
import CustomTextInput from '../src/components/CustomTextInput';
import AuthButton from '../src/components/AuthButton';
import SocialButton from '../src/components/SocialButton';
import {loginWithEmail} from '../src/api/auth';

// test title is displayed
test('displays title the message after a delay', async () => {
  const {getByText} = render(<AuthTitle />);
  await waitFor(() => {
    expect(getByText('Login').props.children).toBe('Login');
  });
});

//test input typing
const onChangeTextMock = jest.fn();
const CHANGE_TEXT = 'manh@google.com';

test('change text when typing email', () => {
  render(
    <CustomTextInput
      onChangeText={onChangeTextMock}
      title="Email"
      placeholder="Enter your email"
    />,
  );
  fireEvent.changeText(
    screen.getByPlaceholderText('Enter your email'),
    CHANGE_TEXT,
  );
});

test('change text when typing password', () => {
  render(
    <CustomTextInput
      onChangeText={onChangeTextMock}
      title="Password"
      placeholder="Enter your password"
    />,
  );
  fireEvent.changeText(
    screen.getByPlaceholderText('Enter your password'),
    CHANGE_TEXT,
  );
});

//test button login
const onPressMock = jest.fn();

test('Can click to Login button', () => {
  const {getByText} = render(
    <AuthButton onPress={onPressMock} label={'Login'} />,
  );
  const label = getByText('Login');
  fireEvent.press(label);
  expect(onPressMock).toHaveBeenCalled();
});

// test button login
test('should render the label of the social link', () => {
  const {getByText} = render(
    <SocialButton
      type="twitter"
      label="John Doe's Twitter"
      link="https://twitter.com/"
    />,
  );

  const label = getByText("John Doe's Twitter");
  //   screen.debug.shallow(label);
  //   screen.debug({message: 'optional message'});
  // screen.debug({mapProps: ({style, ...props}) => ({style})});
  expect(label).toBeTruthy();
});

test('should open the instagram link when the instagram link is pressed', () => {
  const {getByText} = render(
    <SocialButton
      type="instagram"
      label="John Doe's Instagram"
      link="<https://instagram.com/>"
    />,
  );

  const label = getByText("John Doe's Instagram");
  fireEvent.press(label);
  expect(Linking.openURL).toHaveBeenCalledWith('<https://instagram.com/>');
});

//test api login

const defaultUserSuccess = {
  email: 'manh@gmail.com',
  password: 'manh123',
};

describe('test login api function', () => {
  it('Login success with default user', async () => {
    const res = await loginWithEmail(defaultUserSuccess);
    expect(res?.data?.message).toBe('Login successful');
  });

  it('Login success and return success user', async () => {
    const res = await loginWithEmail(defaultUserSuccess);
    expect(res?.data?.users?.email).toBe('manh@gmail.com');
  });
});
