import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

const AVATAR_SIZE = 38;

export interface IUser {
  email: string;
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

const ListScreen = () => {
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://6514fb42dc3282a6a3cdb0e1.mockapi.io/users',
        );
        setUsersData(response?.data);
      } catch (e) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteItem = async (id: string) => {
    try {
      await axios.delete(
        `https://6514fb42dc3282a6a3cdb0e1.mockapi.io/users/${id}`,
      );
      setUsersData(prevUsers => prevUsers.filter(user => user.id !== id));
      Alert.alert('Success', 'Item deleted successfully');
    } catch (error) {
      console.log('🚀 ~ deleteItem ~ error:', error);
      Alert.alert('Error', 'Failed to delete item');
    }
  };

  const showItemClick = (item: any) => {
    // Alert.alert(item);
    Alert.alert(
      'Confirm Delete',
      `Are you sure you want to delete ${item.name}?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', onPress: () => deleteItem(item.id)},
      ],
    );
  };

  const handleRenderItem = useCallback(
    ({item, index}: {item: IUser; index: number}) => (
      <TouchableOpacity
        testID={`item${index}`}
        onPress={() => showItemClick(item)}
        style={styles.userContainer}
        accessibilityLabel={`${item?.id}-user-container`}>
        <View style={styles.avatarWrapper}>
          <Image source={{uri: item?.avatar}} style={styles.image} />
        </View>
        <View style={styles.userInfoContainer}>
          <Text>{item?.name}</Text>
          <Text>{item?.email}</Text>
          <Text>
            {item?.createdAt} {item?.avatar}
          </Text>
        </View>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <View>
      <Text>The Fake Users DB</Text>
      {loading && (
        <ActivityIndicator
          color={'#000'}
          size={'large'}
          accessibilityLabel={'loader'}
        />
      )}
      {hasError && (
        <View style={styles.errorContainer} accessibilityLabel={'alert'}>
          <Text>Error oopsie!</Text>
        </View>
      )}
      <FlatList
        data={usersData}
        renderItem={handleRenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {backgroundColor: '#C63939', padding: 16, borderRadius: 6},
  userContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    marginBottom: 8,
    flex: 1,
  },
  avatarWrapper: {
    backgroundColor: 'rgba(88,186,224,0.65)',
    padding: 16,
    borderRadius: AVATAR_SIZE,
  },
  userInfoContainer: {flex: 1, marginLeft: 16},
  image: {height: AVATAR_SIZE, width: AVATAR_SIZE},
});

export default ListScreen;
