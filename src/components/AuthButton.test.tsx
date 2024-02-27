import AuthButton from './AuthButton';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

const onPressMock = jest.fn();

test('Can click to Login button', () => {
  const {getByText} = render(
    <AuthButton onPress={onPressMock} label={'Login'} />,
  );
  const label = getByText('Login');
  fireEvent.press(label);
  expect(onPressMock).toHaveBeenCalled();
});
