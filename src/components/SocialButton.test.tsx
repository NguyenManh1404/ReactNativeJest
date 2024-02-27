//yarn test SocialButton.test.tsx
import {render, screen, fireEvent} from '@testing-library/react-native';
import SocialButton from './SocialButton';
import React from 'react';
import {Linking} from 'react-native';

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
  screen.debug({message: 'optional message'});
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
