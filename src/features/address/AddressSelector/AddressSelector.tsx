import { useGetAllAddresses } from 'api';
import { TextFieldSelector } from 'components';
import { AddressType } from 'models/index';
import { useMemo, useState } from 'react';
import { addressToOption, addressesToOptions } from './AddressSelector.helpers';
import { AddressSelectorProps } from './AddressSelector.type';

function AddressSelector({ label, placeholder, value, onChange }: AddressSelectorProps) {
  const [searchText, setSearchText] = useState<string>('');
  const { data, isFetching, error } = useGetAllAddresses(searchText);

  const options = useMemo(() => addressesToOptions(data), [data]);
  const optionValue = useMemo(() => value && addressToOption(value), [value]);

  return (
    <TextFieldSelector
      label={label}
      placeholder={placeholder}
      value={optionValue}
      options={options}
      onChange={(option) => onChange(option.value as AddressType)}
      isLoading={isFetching}
      textFieldValue={searchText}
      onChangeTextField={setSearchText}
      error={error ? 'Something wrong happens' : undefined}
      notFoundLabel="No address found"
    />
  );
}

export default AddressSelector;
