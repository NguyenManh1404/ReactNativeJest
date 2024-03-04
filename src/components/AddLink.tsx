import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {gql, useMutation} from '@apollo/client';

// const ADD_LINK = gql`
//   mutation ($url: String!, $description: String!) {
//     post(url: $url, description: $description) {
//       id
//       description
//     }
//   }
// `;

const AddLink = () => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  // const [addLink, {data, loading, error}] = useMutation(ADD_LINK);

  console.log('🚀 ~ AddLink ~ data:', data);
  return (
    <View style={styles.container}>
      <TextInput
        value={url}
        placeholder={'Enter url'}
        onChangeText={setUrl}
        style={styles.textInput}
      />
      <TextInput
        value={description}
        placeholder={'Enter description'}
        onChangeText={setDescription}
        style={styles.textInput}
      />
      <Pressable
        onPress={() => addLink({variables: {url, description}})}
        style={styles.button}>
        <Text style={styles.text}>Add Link</Text>
      </Pressable>
    </View>
  );
};

export default AddLink;

const styles = StyleSheet.create({
  container: {
    width: 200,
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 200,
  },
});
