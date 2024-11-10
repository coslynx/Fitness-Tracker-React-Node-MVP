import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { styled } from '@emotion/styled'; 

const StyledButton = styled(MuiButton)`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.primary.contrastText};
`;

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props} />
  );
};

export default Button;