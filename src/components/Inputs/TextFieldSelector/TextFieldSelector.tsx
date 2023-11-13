import { Loader, NoDataFound, Popper, TextField } from 'components';
import { GlobalVariables } from 'config/constants';
import './TextFieldSelector.css';
import { TextFieldSelectorProps } from './TextFieldSelector.type';
import useTextFieldSelector from './useTextFieldSelector';

function TextFieldSelector(props: TextFieldSelectorProps) {
  const { label, placeholder, notFoundLabel, isLoading, options, value, disabled, error } = props;
  const {
    anchorRef,
    currentTextFieldValue,
    isOpen,
    handleInputChange,
    closeDialog,
    openDialog,
    onSelect,
  } = useTextFieldSelector(props);

  return (
    <div>
      <TextField
        ref={anchorRef}
        label={label ?? 'Select an option'}
        placeholder={placeholder}
        value={currentTextFieldValue}
        onChange={handleInputChange}
        onBlur={closeDialog}
        onFocus={openDialog}
        disabled={disabled}
        error={error}
      />
      <Popper open={isOpen} anchorEl={anchorRef.current}>
        {isLoading ? (
          <Loader minHeight={50} size={3} />
        ) : (
          <div className="text-field-list-options-style">
            {options.length === GlobalVariables.NoDataLength && (
              <NoDataFound message={notFoundLabel ?? 'No options found'} />
            )}
            {options.map((option) => (
              <div
                key={option.label}
                className={`text-field-option-style ${
                  option.value === value?.value ? 'text-field-option-selected' : ''
                }`}
                onMouseDown={() => onSelect(option)}
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
