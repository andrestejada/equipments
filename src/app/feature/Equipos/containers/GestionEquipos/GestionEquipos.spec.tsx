import '@testing-library/jest-dom/extend-expect';
import { GestionEquipos } from './index';
import React from 'react';
import { newEquipmentID } from '../../../../shared/fixture/testData';
import {render} from '@testing-library/react';

const addNewEquipment = jest.fn();
const getAllEquipments = jest.fn();
describe('testing <GestionEquipos/>', () => {
    it('should be render correctly', () => {
        
        const wrapperComponent = render(
            <GestionEquipos
                addNewEquipment={addNewEquipment}
                getAllEquipments={getAllEquipments}
                allEquipments={[newEquipmentID]}
            />
        );
         expect(wrapperComponent.getByText(newEquipmentID.nombre)).toBeInTheDocument(); 
         expect(getAllEquipments).toHaveBeenCalled(); 
    });
});
