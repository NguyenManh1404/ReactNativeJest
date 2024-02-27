import React from 'react';
import {View, Text, StyleSheet, Linking, Image, Platform} from 'react-native';

const Icons = {
  twitter: require('../assets/images/twitter.png'),
  instagram: require('../assets/images/instagram.png'),
};

const SocialButton = ({type, link, label}) => {
  const onSocialLinkPress = () => {
    Linking.openURL(link);
  };
  return (
    <View style={styles.social}>
      <Image
        source={Icons[type]}
        style={styles.icon}
        accessibilityRole="image"
      />

      <Text onPress={onSocialLinkPress} style={styles.label}>
        {label}
      </Text>
    </View>
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
