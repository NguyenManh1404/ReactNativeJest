import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const AuthTitle = () => {
  const [title, setTitle] = useState('Login');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle('Please Login now !');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AuthTitle;
