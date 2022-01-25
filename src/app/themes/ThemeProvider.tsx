import { DefaultTheme, ThemeProvider } from 'styled-components';
import React, { createContext, useState } from 'react';
import { dark, light } from './themes';
import { GlobalStyles } from './GlobalStyle';

interface Context {
  theme: DefaultTheme;
  setTheme: (value: React.SetStateAction<DefaultTheme>) => void;
}
export const ThemeProviderContext = createContext({} as Context);
const { Provider } = ThemeProviderContext;

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const ThemeCustomProvider = ({ children }: Props) => {
  //const currentTheme = localStorage.getItem('theme') === 'light' ? light : dark;
  const localTheme = localStorage.getItem('theme');
  const currentTheme = localTheme ==='dark' ? dark : light;
  const [theme, setTheme] = useState(currentTheme);
  return (
    <Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Provider>
  );
};
