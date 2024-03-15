import {StyleSheet, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {SCREENS} from '../../App';
import {useNavigation} from '@react-navigation/native';
import ButtonCustom from '../components/ButtonCustom';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {Object.keys(SCREENS).map((key, index) => {
        const screenName = SCREENS[key];
        if (screenName === 'Home') {
          return null;
        }
        return (
          <ButtonCustom
            title={screenName}
            key={index}
            onPress={() => navigate(screenName)}
          />
        );
      })}

      {/* <Button title="Login Screen" color={'red'} />
      <Button title="Counter" color={'green'} />
      <Button title="Video" color={'blue'} /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
