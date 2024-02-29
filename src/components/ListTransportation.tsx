import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {gql} from '@apollo/client';
import React, {useState} from 'react';
import useConnectionQuery from '../hooks/useConnectionQuery';
import {debounce} from '../utils/helpers';

const GET_TRANSPORTATION = gql`
  query getTransportations(
    $page: Float
    $limit: Float
    $orderBy: String
    $filters: [FilterDto!]
    $q: String
  ) {
    getTransportations(
      queryParams: {
        page: $page
        limit: $limit
        orderBy: $orderBy
        filters: $filters
        q: $q
      }
    ) {
      meta {
        totalItems
        itemCount
        currentPage
        totalPages
        itemsPerPage
      }
      items {
        id
        name
        description
        logoUrl
      }
    }
  }
`;

const ListTransportation = () => {
  const [refreshing, setOnRefresh] = useState<boolean>(false);

  const {
    items,
    loading: LoadingPage,
    refetch,
    loadMore,
    error: errorPage,
  } = useConnectionQuery(GET_TRANSPORTATION, 'getTransportations', {
    fetchPolicy: 'network-only',
    variables: {
      page: 1,
      limit: 10,
    },
  });

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        {item.description ? (
          <Text style={styles.description}>{item.description}</Text>
        ) : null}
      </View>
    </View>
  );

  if (LoadingPage) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const onDebounceRefresh = () => {
    setOnRefresh(true);
    onRefresh();
  };

  const onRefresh = debounce(async () => {
    refetch && (await refetch({page: 1, limit: 10}));
    setOnRefresh(false);
  }, 2000);


  return (
    <View style={styles.container}>
      <FlatList
        data={items || []}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onDebounceRefresh}
            tintColor="#0000ff"
            titleColor="#0000ff"
          />
        }
        onEndReachedThreshold={1}
        onTouchEnd={loadMore}
      />
    </View>
  );
};

export default ListTransportation;

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});
