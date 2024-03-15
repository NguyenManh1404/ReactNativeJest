import React from 'react';
import {
  Text,
  StyleSheet,
  Linking,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

const Icons = {
  twitter: require('../assets/images/twitter.png'),
  instagram: require('../assets/images/instagram.png'),
};

const SocialButton = ({type, link, label, testID}: any) => {
  const onSocialLinkPress = () => {
    Linking.openURL(link);
  };
  return (
    <TouchableOpacity
      style={styles.social}
      testID={testID}
      onPress={onSocialLinkPress}>
      <Image
        source={Icons[type]}
        style={styles.icon}
        accessibilityRole="image"
      />

      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: 150,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
    marginBottom: 20,
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  label: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default SocialButton;
