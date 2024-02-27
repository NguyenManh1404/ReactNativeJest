import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const AuthButton = ({onPress, label}) => (
  <TouchableOpacity style={styles.loginButton} onPress={onPress}>
    <Text style={styles.loginButtonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AuthButton;
