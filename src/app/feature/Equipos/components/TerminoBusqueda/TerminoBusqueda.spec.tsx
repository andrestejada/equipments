import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchEquipments } from '../../../../core/redux/reductores/Equipment/EquipmentReducer';
import { TerminoBusqueda } from './index';
import { testDataPagination } from '../../../../shared/fixture/testData';
import userEvent from '@testing-library/user-event';
describe('testing in the TerminoBusqueda component', () => {
  
  const getEquipmentsByPage = jest.fn();
  const getCurrentPage = jest.fn();
  beforeEach(()=>{
    jest.clearAllMocks();
  });
  
  it('dont fount search term show espefic message', () => {
    const MocksearchEquipment: SearchEquipments = {
      equipmentsPerPage: [],
      filteredEquipments: [],
      term: 'li',
    };
    render(<TerminoBusqueda 
              getEquipmentsByPage={getEquipmentsByPage} 
              getCurrentPage={getCurrentPage} 
              searchEquipments={MocksearchEquipment}
            />);
    const msg = screen.getByText(/No se encontraron coincidencia con/i);
    expect(msg).toBeInTheDocument();
    expect(msg.children[0].textContent).toBe(MocksearchEquipment.term);
  });

  it('found a espefict search term', () => {
    const MocksearchEquipment: SearchEquipments = {
      equipmentsPerPage: [],
      filteredEquipments: testDataPagination,
      term: 'li',
    };
    render(<TerminoBusqueda 
              getEquipmentsByPage={getEquipmentsByPage} 
              getCurrentPage={getCurrentPage} 
              searchEquipments={MocksearchEquipment}
            />);
    const msg = screen.getByText(/Su Termino de busqueda es/i);
    expect(msg).toBeInTheDocument();
    expect(msg.children[0].textContent).toBe(MocksearchEquipment.term);
     
    const removeSearchBtn = screen.getByRole(/removeSearchTerm/i);
    userEvent.click(removeSearchBtn);
    expect(getEquipmentsByPage).toHaveBeenCalledWith(1);
    expect(getCurrentPage).toHaveBeenCalledWith(1);
  });
});