import { useEffect, useState } from 'react';

export default function useQuery<QueryResponseType, QueryParamsType>(
  params: QueryParamsType,
  queryFn: (params: QueryParamsType) => Promise<QueryResponseType>,
) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<QueryResponseType>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    onFetchQuery();
  }, [params]);

  const onFetchQuery = async () => {
    try {
      setIsFetching(true);
      const newData = await queryFn(params);
      setData(newData);
      setIsLoading(false);
      setIsFetching(false);
    } catch (e) {
      setError(e);
    }
  };

  return {
    data,
    isLoading,
    isFetching,
    error,
  };
}
