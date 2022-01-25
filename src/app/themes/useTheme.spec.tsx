import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { ThemeCustomProvider } from './ThemeProvider';
import { useTheme } from './useTheme';
jest.spyOn(Storage.prototype,'setItem');

describe('Name of the group', () => {
  const Provider = ({children}:any)=> <ThemeCustomProvider>{children}</ThemeCustomProvider> ;
  const { result } = renderHook(() => useTheme(),{wrapper:Provider} );
  it('should change the color of the theme correctly', () => {
    expect(result.current.theme.type).toBe('light');
    act(()=>{
      result.current.toggleTheme();
    });
    expect(result.current.theme.type).toBe('dark');
    expect(localStorage.setItem).toHaveBeenCalled();
    act(()=>{
      result.current.toggleTheme();
    });
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(result.current.theme.type).toBe('light');
  });
});