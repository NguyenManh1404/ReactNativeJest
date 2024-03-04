import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import ListTransportation from './src/components/ListTransportation';
//import AddLink from './src/components/AddLink';

// Initialize Apollo Client
//https://medium.com/simform-engineering/apollo-graphql-with-react-native-part-1-29ec126d8c58
// const client = new ApolloClient({
//   // uri: 'http://localhost:4000/graphql',
//   uri: 'https://api-uat.pikthat.com/driver/graphql',
//   cache: new InMemoryCache(),
//   credentials: 'same-origin',
//   request: setCredentials,
// });

const App = () => {
  const httpLink = createHttpLink({
    uri: 'https://api-uat.pikthat.com/driver/graphql',
    // uri: 'http://localhost:4000/graphql',
    // credentials: 'same-origin',
  });

  const authLink = setContext((_, {headers}) => {
    const token =
      'eyJraWQiOiJ3dzZsUjJWdlN1VnhTMkJ6a2VzN3V0WVc3R1ZBMWc1Y2lzbHJiODM1YUJvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5YTU2Njg2Ni1iZmIyLTQ4ZjAtYjMwZS04NWQ1ZGRhYTI0MWMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmNhLWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9jYS1jZW50cmFsLTFfZzFFZEU2SWJnIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6IjlhNTY2ODY2LWJmYjItNDhmMC1iMzBlLTg1ZDVkZGFhMjQxYyIsIm9yaWdpbl9qdGkiOiI3OGQ4YTAyYi0yYzQxLTQzNzctOWRmYi1lMjAyZTVjOGIzMTEiLCJjdXN0b206dXNlclR5cGUiOiJEcml2ZXIiLCJhdWQiOiIydWU4OGVwazNmZHFtazA2MzFrcjdjZDFpcyIsImV2ZW50X2lkIjoiNzQxZDRlYjUtZmFjZS00ZTc3LWFiOGYtY2VjYWYyMjU3N2QxIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MDkxMDM1OTIsInBob25lX251bWJlciI6IisxODY1Njc1MjMyIiwiZXhwIjoxNzA5MTk1NzU1LCJpYXQiOjE3MDkxOTIxNTUsImp0aSI6IjNhNWRjOGUwLWVjMmMtNDcxNi1hOTUxLWQwM2FlOGM5MjNlNSIsImVtYWlsIjoiZHJpdmVyXzFfQGdtYWlsLmNvbSJ9.UO3_PUWqGm45y1LvcOEhyk_OeJsfAvUjlr45Q-zdtp0-PvblTV2M8J0aQ6u127vlTWj1RVFkHFQjtcPMo6udsBuzCZ6bOifWy6uUJNfiPJWLmCn78hc5mypkyxsuuJG_0xpln2HqqBn27yIbYbtRQ2kL8jWPX5w1ErgoKcdRd8AhdxcM2teYGWehNXyZIiUzujouF_21qBXXZ0CtnLegi73UYSAICWuKhyWrfasObLHh3GQBynrC2ThxBmOfpH_bFaVyLThhJbGM-RWe5Ils2S9uASz4-5O0CMy_9Mpx_5WepT-NiEfm2iNfr7o-hnRbZSoaSq6MEaCGKuahTVGzfw';
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
        platform: 'IOS',
        appname: 'DRIVER',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    //uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        {/* <AddLink /> */}
        <ListTransportation />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputTitle: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  viewSocial: {
    flexDirection: 'row',
    width: '60%',
    marginTop: 20,
  },
});
