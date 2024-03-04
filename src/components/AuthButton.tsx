import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const AuthButton = ({onPress, label, testID}) => {
  // const GET_FEED = gql`
  //   query getFeed {
  //     feed {
  //       id
  //       links {
  //         id
  //         description
  //       }
  //     }
  //   }
  // `;

  // const {loading, error, data} = useQuery(GET_FEED);
  // console.log('🚀 ~ App ~ data:', data, error, loading);
  return (
    <TouchableOpacity
      style={styles.loginButton}
      onPress={onPress}
      testID={testID}>
      <Text style={styles.loginButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuthButton;
