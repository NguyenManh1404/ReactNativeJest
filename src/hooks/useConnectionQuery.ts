import {useQuery, QueryHookOptions} from '@apollo/client';

const useConnectionQuery = (
  query: any,
  fieldName: string,
  options: QueryHookOptions,
) => {
  const {
    data = {},
    loading,
    error,
    refetch,
    fetchMore,
  } = useQuery(query, options);

  let resp = data[fieldName];
  if (error || loading || !resp) {
    return {error, loading, [fieldName]: undefined};
  }

  const loadMore = () => {
    const responseData = data[fieldName];
    return fetchMore({
      variables: {
        page: responseData?.meta?.currentPage + 1,
      },
      updateQuery: (previousResult, {fetchMoreResult}) => {
        const prevValues: any = previousResult[fieldName] || {};
        const nextValues: any = fetchMoreResult[fieldName] || {};
        if (prevValues?.meta?.currentPage === nextValues?.meta?.currentPage) {
          return previousResult;
        }
        return {
          [fieldName]: {
            ...nextValues,
            meta: nextValues?.meta,
            items: [...data[fieldName]?.items, ...nextValues?.items],
          },
        };
      },
    });
  };

  return {
    items: resp?.items,
    loading,
    loadMore,
    refetch,
    error,
    meta: resp?.meta,
  };
};

export default useConnectionQuery;
