import { ChangeEvent } from 'react';

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
