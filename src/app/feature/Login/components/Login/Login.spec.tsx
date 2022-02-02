import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, render ,screen,wait} from '@testing-library/react';
import { Login } from './index';
import  React from 'react';
import { ThemeCustomProvider } from 'app/themes/ThemeProvider';
import userEvent from '@testing-library/user-event';



describe('Testing in the login Components', () => {
  

  beforeEach(()=>{
    render(
      <ThemeCustomProvider>
        <Login/>
      </ThemeCustomProvider>
    );
  });

  it('should be validated correctly email and password', async() => {
    //screen.debug()
    const btnSubmit = screen.getByText(/iniciar sesión/i);
    userEvent.click(btnSubmit);
    
    const usernameError= await screen.findByText(/Este campo es requerido/i);
    const passwordError= await screen.findByText(/El password es Obligatorio/i);
    expect(usernameError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it('should be submit the form correctly and reset the form', async() => {
    const email = screen.getByPlaceholderText('correo@correo.com');
    const password = screen.getByPlaceholderText('******');
    userEvent.type(email,'andres@correo.com');
    userEvent.type(password,'123456');
    const btnSubmit = screen.getByText(/iniciar sesión/i);
    userEvent.click(btnSubmit);

    await screen.findByText(/Inicio de sesión/i);
    expect(email).toHaveValue('');
    expect(password).toHaveValue('');
  });
});