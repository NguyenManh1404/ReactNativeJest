import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomTextInput = ({
  title,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  testID,
}) => {
  return (
    <View>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        testID={testID}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default CustomTextInput;
