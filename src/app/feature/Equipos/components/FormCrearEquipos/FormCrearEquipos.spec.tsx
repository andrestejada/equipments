import '@testing-library/jest-dom/extend-expect';
import {
  cleanup,
  fireEvent,
  prettyDOM,
  render,
  screen,
} from '@testing-library/react';
import {
  newEquipment,
  newEquipmentID,
} from '../../../../shared/fixture/testData';
import { FormCrearEquipos } from './index';
import React from 'react';
import { ThemeCustomProvider } from '../../../../themes/ThemeProvider';
import userEvent from '@testing-library/user-event';

const addNewEquipment = jest.fn();
const editEquipment = jest.fn();

describe('form crear Equipos', () => {

  beforeEach(() => {
    render(
      <ThemeCustomProvider>
        <FormCrearEquipos
          addNewEquipment={addNewEquipment}
          editEquipment={editEquipment}
          equipmentSelected={[]}
        />
      </ThemeCustomProvider>
    );
    
    jest.clearAllMocks();
  });
  // it('should render corrrectly', () => {
  //     expect(wrapperComponent).toMatchSnapshot();
  // });

  it('should be find the alert when press submit button', async () => {
    const button = screen.getByRole(/submitForm/i);
    userEvent.click(button);
    const errors = await screen.findAllByText(/requerid/i);
    expect(errors[0]).toBeInTheDocument();
    expect(errors[0].textContent).toBe('El codigo es requerido');
    expect(errors[1]).toBeInTheDocument();
    expect(errors[1].textContent).toBe('El nombre es requerido');
    expect(errors[2]).toBeInTheDocument();
    expect(errors[2].textContent).toBe('La ubicacion es requerida');
    expect(errors[3].textContent).toBe('La fecha es requerida');
  });

  it('the form should be submit correctly', async () => {
    const { codigo, nombre, ubicacion } = newEquipment;
    const button = screen.getByRole('submitForm');
    userEvent.type(
      screen.getByPlaceholderText(/ingresa un codigo/i),
      codigo.toString()
    );
    userEvent.type(screen.getByPlaceholderText(/ingresa un nombre/i), nombre);
    userEvent.selectOptions(screen.getByRole(/ubicacion/i), ubicacion);
    userEvent.type(
      screen.getByRole(/fecha/i),
      new Date().toISOString().slice(0, 10)
    );
    userEvent.click(button);

    const codeValue = await screen.findByPlaceholderText(/ingresa un codigo/i);
    expect(addNewEquipment).toHaveBeenCalled();
    expect(addNewEquipment).toHaveBeenCalledWith({
      codigo,
      nombre,
      ubicacion,
      fecha: expect.any(Date),
    });
    expect(codeValue).toHaveTextContent('');
  });

  it('should find the value in the form when exist a equipment selected ', async () => {
    cleanup();
    render(
      <ThemeCustomProvider>
        <FormCrearEquipos
          addNewEquipment={addNewEquipment}
          editEquipment={editEquipment}
          equipmentSelected={[newEquipmentID]}
        />
      </ThemeCustomProvider>
    );

    expect(
      screen.getByText('Edita el equipo seleccionado')
    ).toBeInTheDocument();
    expect(screen.getByText('Edita los datos')).toBeInTheDocument();
    expect(screen.getByText('Editar')).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/ingresa un nombre para el equipo/i)).toHaveValue(newEquipmentID.nombre);
    expect(screen.getByRole(/ubicacion/i)).toHaveValue( newEquipmentID.ubicacion );
    expect(screen.getByRole(/fecha/i)).toHaveValue(newEquipmentID.fecha.toString().slice(0,10));
    //expect(screen.getByPlaceholderText(/ingresa un codigo/i)).toHaveValue(newEquipmentID.codigo.toString());
  });
  it('should find the value in the form when exist a equipment selected ', async() => {
    cleanup();  
    render(
          <ThemeCustomProvider>

              <FormCrearEquipos
                  addNewEquipment={addNewEquipment}
                  editEquipment={editEquipment}
                  equipmentSelected={[newEquipmentID]}
              />
          </ThemeCustomProvider>
      );

     const button = screen.getByText('Editar');
     const codigo =  screen.getByPlaceholderText(/ingresa un codigo/i);
     userEvent.type(codigo,'456');
     userEvent.click(button);
     await screen.findByPlaceholderText(/Ingresa un codigo/i);
     expect(editEquipment).toHaveBeenCalled();
     expect(editEquipment).toHaveBeenCalledWith({
        codigo: 456,
        fecha: new Date('2022-01-25T05:00:00.000Z'),        
        id: 1,
        nombre: 'bascula',
        ubicacion: 'almacen',
    });
});
});
