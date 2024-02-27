import {Alert} from 'react-native';

import axios from 'axios';

const fetchPost = async (id: number) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return results.data;
};

const loginWithEmail = async (user: any) => {
  try {
    const response = await axios.post(
      'https://mastermeal.onrender.com/api/auth/login-simple',
      {
        email: user?.email,
        password: user?.password,
      },
    );
    return response?.data;
    // Alert.alert('Login successful', JSON.stringify(response.data?.users));
  } catch (error) {
    Alert.alert('Login Failed', 'Please check your email and password.');
  }
};

export {fetchPost, loginWithEmail};
