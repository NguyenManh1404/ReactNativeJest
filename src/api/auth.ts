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
    Alert.alert(
      response?.data.errors?.message || response?.data?.data?.message,
    );
    return response?.data;
  } catch (error) {
    Alert.alert('Login Failed', 'Please check your email and password.');
    return error;
  }
};

export {fetchPost, loginWithEmail};
