import  { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${ ({theme})=> theme.colors.background };
    color: ${({theme})=>theme.colors.text};
    transition: 0.4s ease all;
    /* border-color: ${({theme})=>theme.colors.borderColor}; */
  }
  
`;