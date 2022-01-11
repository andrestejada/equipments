import { fireEvent, render } from '@testing-library/react';
import { Paginador } from './index';
import React from 'react';
import { SearchEquipments } from '../../../../core/redux/reductores/Equipment/EquipmentReducer';
describe('testing Paginador Equipos Container', () => {
  const getEquipmentsByPage = jest.fn();
  const getCurrentPage = jest.fn();
  const changePageTermSearch = jest.fn();
  const MocksearchEquipment: SearchEquipments = {
    equipmentsPerPage: [],
    filteredEquipments: [],
    term: '',
  };

  beforeEach(()=>{
    jest.clearAllMocks();
  });

  test('should be find the buttons', () => {
    const wrapperComponent = render(
      <Paginador
        totalCount={12}
        getEquipmentsByPage={getEquipmentsByPage}
        getCurrentPage={getCurrentPage}
        changePageTermSearch={changePageTermSearch}
        currentPage={1}
        searchEquipments={MocksearchEquipment}
      />
    );
    const numberOfButtons = wrapperComponent.getByRole(
      /number-button-container/i
    );
    expect(numberOfButtons.children.length).toBe(4);
    expect(numberOfButtons.children[0].textContent).toBe('1');
    expect(numberOfButtons.children[0]).toHaveStyle(
      'background-color: #3e8ace'
    );
  });

  test('should be change the page when press diferent button', async () => {
    const wrapperComponent = render(
      <Paginador
        totalCount={12}
        getEquipmentsByPage={getEquipmentsByPage}
        getCurrentPage={getCurrentPage}
        changePageTermSearch={changePageTermSearch}
        currentPage={4}
        searchEquipments={MocksearchEquipment}
      />
    );
    const numberOfButtons = wrapperComponent.getByRole(
      /number-button-container/i
    );
    const btn4 = numberOfButtons.children[3];
    fireEvent.click(btn4);
    const bnt4Render = (
      ((await wrapperComponent.findByRole(/number-button-container/i)).children[3])
    );
    expect(getEquipmentsByPage).toHaveBeenCalled();
    expect(getEquipmentsByPage).toHaveBeenCalledWith(4);
    expect(getCurrentPage).toHaveBeenCalledTimes(2);
    expect(bnt4Render).toHaveStyle('box-shadow: 0px 0px 4px 1px #90b1ce');
  });
});
