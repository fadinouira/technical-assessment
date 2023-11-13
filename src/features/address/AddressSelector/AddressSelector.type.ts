import { AddressType } from 'models/index';

export interface AddressSelectorProps {
  label?: string;
  placeholder?: string;
  value?: AddressType;
  onChange: (address: AddressType) => void;
}
