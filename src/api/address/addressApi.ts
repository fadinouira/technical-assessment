import { CONFIG, ENDPOINTS } from 'config';
import { injectParams, joinPaths } from 'utils';
import { AddressApiParams } from './addressApi.type';

export const getAllAddresses = async (searchText: string) => {
  const params: AddressApiParams = {
    language: 'en',
    name_sf: searchText,
    outputFormat: 'RapidJSON',
    type_sf: 'any',
  };
  const AddressApiPath = joinPaths([CONFIG.BASE_URL_API, ENDPOINTS.address], true);
  const result = await fetch(injectParams(AddressApiPath, { ...params }));
  console.log(result);
};
