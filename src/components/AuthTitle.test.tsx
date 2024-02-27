import AuthTitle from './AuthTitle';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';

// test('displays the message after a delay', async () => {
//   const {getByText} = render(<AuthTitle />);
//   // Wait for 5 seconds
//   await waitFor(() => getByText('Please Login now !'));
//   expect(getByText('Please Login now !')).toBeInTheDocument();

//   //   await waitFor(() => {
//   //     expect(getByText('Please Login now !')).toBeInTheDocument();
//   //   });
// });

test('displays the message after a delay', async () => {
  const {getByText} = render(<AuthTitle />);
  await waitFor(() => {
    expect(getByText('Login').props.children).toBe('Login');
  });
});
