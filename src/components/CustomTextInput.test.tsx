//yarn test CustomTextInput.test.tsx
import {render, screen, fireEvent} from '@testing-library/react-native';
import React from 'react';

import CustomTextInput from './CustomTextInput';

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
