import { forwardRef } from 'react';
import './TextField.css';
import { TextFieldProps } from './TextField.type';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, placeholder, className, value, onChange, onClick }, ref) => {
    return (
      <div className={`text-field-root-style ${className}`} onClick={onClick}>
        {label && (
          <label htmlFor="textfield" className="text-field-label-style">
            {label}
          </label>
        )}
        <input
          type="text"
          id="textfield"
          ref={ref}
          placeholder={placeholder}
          className="text-field-input-style"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
