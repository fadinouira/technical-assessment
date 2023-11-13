import { SelectOption } from 'interfaces/index';
import { AddressType } from 'models/Address';

export const addressToOption = (address: AddressType): SelectOption<AddressType> => ({
  label: address.name,
  value: address,
});

export const addressesToOptions = (address?: AddressType[]): SelectOption<AddressType>[] =>
  address?.map(addressToOption) ?? [];
