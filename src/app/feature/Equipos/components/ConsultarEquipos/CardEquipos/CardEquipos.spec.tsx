import { fireEvent, render } from '@testing-library/react';
import { CardEquipos } from './index';
import React from 'react';
import { newEquipmentID } from '../../../../../shared/fixture/testData';

describe('testing in the CardEquipos component', () => {
    const deleteEquipment = jest.fn();
    const selectEquipment = jest.fn();

    let wrapperComponent = render(
        <CardEquipos 
            {...newEquipmentID}
            deleteEquipment={deleteEquipment}
            selectEquipment={selectEquipment}
        />
    );

    beforeEach(()=>{
        wrapperComponent = render(
            <CardEquipos 
                {...newEquipmentID}
                deleteEquipment={deleteEquipment}
                selectEquipment={selectEquipment}
            />);
        jest.clearAllMocks();
    });
    
    it('should be call the funcion delete ', () => {
        const button = wrapperComponent.getAllByRole('button',{name:'Eliminar'});        
        fireEvent.click(button[1]);
        expect(deleteEquipment).toHaveBeenCalled();
        expect(deleteEquipment).toBeCalledWith(newEquipmentID.id);
    });
    it('should be call the funcion edit', () => {
        const button = wrapperComponent.getByText('Editar');        
        fireEvent.click(button);
        expect(selectEquipment).toHaveBeenCalled();
        expect(selectEquipment).toBeCalledWith(newEquipmentID.id);
    });
});
