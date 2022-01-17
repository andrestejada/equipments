import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BuscadorEquipos } from './index';
import userEvent from '@testing-library/user-event';

describe('tenstin in the <BuscadorEquipos/> componenet', () => {
  const getEquipmentBySearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    render(<BuscadorEquipos getEquipmentBySearch={getEquipmentBySearch} />);
  });
  it('the fn not should be called when the input is empty ', () => {
    const searchBtn = screen.getByRole(/searchButton/i);
    userEvent.click(searchBtn);
    const searchError = screen.getByRole(/searchError/i);
    expect(searchError).toBeInTheDocument();
    expect(getEquipmentBySearch).not.toHaveBeenCalled();
  });

  it('the fn to have been call an the msg error dont be show it', () => {
    const searchBtn =  screen.getByRole(/searchButton/i);
    const searchInput = screen.getByPlaceholderText(/Buscar Equipo/i);
    userEvent.type(searchInput,'bascula');
    userEvent.click(searchBtn);
    expect(getEquipmentBySearch).toHaveBeenCalled();
  });
});
