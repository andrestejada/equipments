import '@testing-library/jest-dom/extend-expect';
import { GestionEquipos } from './index';
import React from 'react';
import { SearchEquipments } from '../../../../core/redux/reductores/Equipment/EquipmentReducer';
import { newEquipmentID } from '../../../../shared/fixture/testData';
import {render} from '@testing-library/react';

const addNewEquipment = jest.fn();
const getEquipmentsByPage = jest.fn();
const  deleteEquipment = jest.fn();
const editEquipment = jest.fn();
const selectEquipment = jest.fn();
const getEquipmentBySearch= jest.fn();
const getCurrentPage= jest.fn();
const changePageTermSearch= jest.fn();
describe('testing <GestionEquipos/>', () => {
    beforeEach(()=>{
        jest.clearAllMocks();
    });
    const MocksearchEquipment:SearchEquipments ={
        equipmentsPerPage:[],
        filteredEquipments:[],
        term:''
    };
    it('should be render correctly with equipments', () => {
        
        const wrapperComponent = render(
            <GestionEquipos
                addNewEquipment={addNewEquipment}
                getEquipmentsByPage={getEquipmentsByPage}
                allEquipments={[newEquipmentID]}
                deleteEquipment={deleteEquipment}
                equipmentSelected={[]}
                editEquipment={editEquipment}
                selectEquipment={selectEquipment} 
                totalCount={0} 
                currentPage={0} 
                getEquipmentBySearch={getEquipmentBySearch} 
                getCurrentPage={getCurrentPage} 
                changePageTermSearch={changePageTermSearch} 
                searchEquipments={MocksearchEquipment}            />
        );
         expect(wrapperComponent.getByText(newEquipmentID.nombre)).toBeInTheDocument(); 
         expect(getEquipmentsByPage).toHaveBeenCalled(); 
    });
    it('should be render correctly without equipments', () => {
        
        const wrapperComponent = render(
            <GestionEquipos
                addNewEquipment={addNewEquipment}
                getEquipmentsByPage={getEquipmentsByPage}
                allEquipments={[]}
                deleteEquipment={deleteEquipment}
                editEquipment={editEquipment}
                equipmentSelected={[]}
                selectEquipment={selectEquipment} 
                totalCount={0} 
                currentPage={0}     
                getEquipmentBySearch={getEquipmentBySearch} 
                getCurrentPage={getCurrentPage} 
                changePageTermSearch={changePageTermSearch} 
                searchEquipments={MocksearchEquipment}              
            />
        );
         expect(getEquipmentsByPage).toHaveBeenCalled(); 
         expect(wrapperComponent.getByText(/No hay equipos disponibles empieza creando uno/i)).toBeInTheDocument();
    });
});
