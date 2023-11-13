import { SelectOption } from 'interfaces/index';

export interface TextFieldSelectorProps {
  label?: string;
  placeholder?: string;

  initialSearchText?: string;
  textFieldValue?: string;

  clearOnSelect?: boolean;
  closeOnSelect?: boolean;

  isLoading?: boolean;

  options: SelectOption<unknown>[];
  value?: SelectOption<unknown>;
  onChange: (value: SelectOption<unknown>) => void;
  onChangeTextField?: (value: string) => void;

  disabled?: boolean;
  error?: string;
}
