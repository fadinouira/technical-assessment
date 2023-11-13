import { GlobalVariables } from 'config';
import useDebounce from 'hooks/useDebounce';
import useQuery from 'hooks/useQuery';
import { getAllAddresses } from './addressApi';
import { AddressApiResponse } from './addressApi.type';

export function useGetAllAddresses(searchText: string) {
  const debouncedSearchText = useDebounce<string>(searchText, GlobalVariables.DebounceTime.medium);
  const { data, isFetching, isLoading, error } = useQuery<AddressApiResponse, string>(
    debouncedSearchText,
    getAllAddresses,
  );
  return { data, isFetching, isLoading, error };
}
