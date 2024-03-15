import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface IButtonCustom {
  title: string;
  onPress: () => void;
  testID?: string;
}

const ButtonCustom = ({title, onPress, testID}: IButtonCustom) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} testID={testID}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonCustom;
