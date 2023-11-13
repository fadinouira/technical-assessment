import { ChangeEvent, FocusEvent } from 'react';

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}
