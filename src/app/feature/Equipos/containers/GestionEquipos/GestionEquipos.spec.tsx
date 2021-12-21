import '@testing-library/jest-dom/extend-expect';
import { GestionEquipos } from './index';
import React from 'react';
import { newEquipmentID } from '../../../../shared/fixture/testData';
import {render} from '@testing-library/react';

const addNewEquipment = jest.fn();
const getAllEquipments = jest.fn();
const  deleteEquipment = jest.fn();
const editEquipment = jest.fn();
const selectEquipment = jest.fn();
describe('testing <GestionEquipos/>', () => {
    beforeEach(()=>{
        jest.clearAllMocks();
    });
    it('should be render correctly with equipments', () => {
        
        const wrapperComponent = render(
            <GestionEquipos
                addNewEquipment={addNewEquipment}
                getAllEquipments={getAllEquipments}
                allEquipments={[newEquipmentID]}
                deleteEquipment={deleteEquipment}
                equipmentSelected={[]}
                editEquipment={editEquipment}
                selectEquipment={selectEquipment}
            />
        );
         expect(wrapperComponent.getByText(newEquipmentID.nombre)).toBeInTheDocument(); 
         expect(getAllEquipments).toHaveBeenCalled(); 
    });
    it('should be render correctly without equipments', () => {
        
        const wrapperComponent = render(
            <GestionEquipos
                addNewEquipment={addNewEquipment}
                getAllEquipments={getAllEquipments}
                allEquipments={[]}
                deleteEquipment={deleteEquipment}
                editEquipment={editEquipment}
                equipmentSelected={[]}
                selectEquipment={selectEquipment}

            />
        );
         expect(getAllEquipments).toHaveBeenCalled(); 
         expect(wrapperComponent.getByText(/No hay equipos disponibles empieza creando uno/i)).toBeInTheDocument();
    });
});
