import { CONFIG, ENDPOINTS } from 'config';
import { injectParams, joinPaths } from 'utils';
import { AddressApiParams, AddressApiResponse } from './addressApi.type';

export const getAllAddresses = async (searchText: string) => {
  const params: AddressApiParams = {
    language: 'en',
    name_sf: `{${searchText || 'Suchtext'}}`,
    outputFormat: 'RapidJSON',
    type_sf: 'any',
  };
  const AddressApiPath = joinPaths([CONFIG.BASE_URL_API, ENDPOINTS.address], true);
  const response = await fetch(injectParams(AddressApiPath, { ...params }));

  // Check if the request was successful (status code 2xx)
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  // Parse the JSON body
  const data: AddressApiResponse = await response.json();

  // Return the parsed JSON body
  return data;
};
