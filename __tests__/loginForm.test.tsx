//yarn test loginForm.test.tsx

import App from '../App';
import {render, fireEvent, screen} from '@testing-library/react-native';
import React from 'react';

describe('Login', () => {
  describe('change text login', () => {
    it('change text email and password', () => {
      const {getByTestId} = render(<App />);

      // use fireEvent change value TextInput
      fireEvent.changeText(getByTestId('email'), 'manh@gmail.com');
      fireEvent.changeText(getByTestId('password'), 'manh123');

      // use toEqual check value TextInput
      expect(getByTestId('email').props.value).toEqual('manh@gmail.com');
      expect(getByTestId('password').props.value).toEqual('manh123');
    });
  });

  describe('Submit form login', () => {
    it('on submit login', () => {
      const data = {password: 'manh123', email: 'manh@gmail.com'};
      const submitHandler = jest.fn();
      const {getByTestId} = render(
        // passing prop to Login component
        <App testLogin={submitHandler} />,
      );

      fireEvent.changeText(getByTestId('email'), 'manh@gmail.com');
      fireEvent.changeText(getByTestId('password'), 'manh123');

      expect(getByTestId('email').props.value).toEqual('manh@gmail.com');
      expect(getByTestId('password').props.value).toEqual('manh123');

      // use fireEvent.press call Button submit
      fireEvent.press(getByTestId('btnLogin'));

      // checking output data equal input
      expect(submitHandler).toHaveBeenCalledWith(data);
    });
  });
});
