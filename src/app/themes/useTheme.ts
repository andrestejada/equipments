import { dark, light } from './themes';
import { ThemeProviderContext } from './ThemeProvider';
import {  useContext  } from 'react';

export const useTheme = ()=>{

  const {theme ,setTheme} = useContext(ThemeProviderContext);
  const toggleTheme =()=>{
    if(theme.type === 'light'){
      setTheme(dark);
      localStorage.setItem('theme','dark');
    }else{
      setTheme(light);
      localStorage.setItem('theme','light');
    }    
  };  
  return {
    theme,
    toggleTheme
  };

};