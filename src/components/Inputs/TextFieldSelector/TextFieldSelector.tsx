import { Loader, TextField } from 'components';
import Popper from 'components/Popper/Popper';
import { SelectOption } from 'interfaces/Input';
import { ChangeEvent, useRef, useState } from 'react';
import './TextFieldSelector.css';
import { TextFieldSelectorProps } from './TextFieldSelector.type';

function TextFieldSelector({
  label,
  placeholder,
  initialSearchText,
  textFieldValue,
  clearOnSelect,
  closeOnSelect,
  isLoading,
  options,
  value,
  disabled,
  error,
  onChange,
  onChangeTextField,
}: TextFieldSelectorProps) {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState(initialSearchText ?? '');

  console.log(searchText);

  const anchorRef = useRef<HTMLInputElement>(null);
  const currentTextFieldValue = (textFieldValue ?? searchText) || (!open ? value?.label ?? '' : '');

  const onSelect = (value: SelectOption<unknown>) => {
    onChange(value);
    if (closeOnSelect) {
      handleClose();
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

  const handleTextFieldClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TextField
        ref={anchorRef}
        label={label ?? 'Select an option'}
        placeholder={placeholder}
        value={currentTextFieldValue}
        onChange={handleInputChange}
        onClick={handleTextFieldClick}
        disabled={disabled}
        error={error}
      />
      <Popper open={open} anchorEl={anchorRef.current} onClose={handleClose}>
        {isLoading ? (
          <Loader minHeight={50} size={3} />
        ) : (
          <div>
            {options.map((option) => (
              <div
                key={option.label}
                className={`text-field-option-style ${
                  option.value === value?.value ? 'text-field-option-selected' : ''
                }`}
                onClick={() => onSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </Popper>
    </div>
  );
}

export default TextFieldSelector;
