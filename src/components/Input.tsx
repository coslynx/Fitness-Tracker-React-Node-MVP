import React, { useState } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@emotion/styled';

interface InputProps extends TextFieldProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  error = false,
  helperText,
  style,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  return (
    <TextField
      label={label}
      type={type}
      value={inputValue}
      onChange={handleChange}
      required={required}
      error={error}
      helperText={helperText}
      style={style}
      {...otherProps}
    />
  );
};

export default Input;