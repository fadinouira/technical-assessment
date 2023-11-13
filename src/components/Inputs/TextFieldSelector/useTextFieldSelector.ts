import useDialog from 'hooks/useDialog';
import { SelectOption } from 'interfaces/Input';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TextFieldSelectorProps } from './TextFieldSelector.type';

export default function useTextFieldSelector({
  initialSearchText,
  textFieldValue,
  clearOnSelect,
  closeOnSelect,
  value,
  onChange,
  onChangeTextField,
}: TextFieldSelectorProps) {
  const { isOpen, openDialog, closeDialog } = useDialog();
  const [searchText, setSearchText] = useState(initialSearchText ?? '');

  const anchorRef = useRef<HTMLInputElement>(null);
  const searchValue = textFieldValue || searchText;
  const currentTextFieldValue = !isOpen ? value?.label ?? searchValue : searchValue;

  useEffect(() => {
    onInputChange('');
  }, [isOpen]);

  const onSelect = (value: SelectOption<unknown>) => {
    onChange(value);
    if (closeOnSelect) {
      closeDialog();
    }
    if (clearOnSelect) {
      onInputChange('');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onInputChange(inputValue);
  };

  const onInputChange = (value: string) => {
    if (onChangeTextField) {
      onChangeTextField(value);
    } else {
      setSearchText(value);
    }
  };

  return {
    anchorRef,
    currentTextFieldValue,
    isOpen,
    handleInputChange,
    closeDialog,
    openDialog,
    onSelect,
  };
}
