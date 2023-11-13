import { forwardRef } from 'react';
import './TextField.css';
import { TextFieldProps } from './TextField.type';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, placeholder, className, value, disabled, error, onChange, onClick, onBlur, onFocus },
    ref,
  ) => {
    return (
      <div className={`text-field-root-style ${className}`} onClick={onClick}>
        {label && <label className="text-field-label-style">{label}</label>}
        <input
          type="text"
          ref={ref}
          placeholder={placeholder}
          className={`text-field-input-style ${error ? 'text-field-input-error-style' : ''}`}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
        />
        {error && <label className="text-field-error-label-style">{error}</label>}
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
