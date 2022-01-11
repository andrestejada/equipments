import { fireEvent, render } from '@testing-library/react';
import { CardEquipos } from './index';
import React from 'react';
import { newEquipmentID } from '../../../../../shared/fixture/testData';

describe('testing in the CardEquipos component', () => {
    const deleteEquipment = jest.fn();
    const selectEquipment = jest.fn();
    const getAllEquipments = jest.fn();

    let wrapperComponent = render(
        <CardEquipos
            allEquipments={[newEquipmentID]} 
            currentPage={2}
            getEquipmentsByPage={getAllEquipments}
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
                allEquipments={[newEquipmentID]} 
                currentPage={2}
                getEquipmentsByPage={getAllEquipments}
            />);
        jest.clearAllMocks();
    });
    
    it('should be call the funcion delete ', () => {
        const button = wrapperComponent.getAllByRole('button',{name:'Eliminar'});        
        fireEvent.click(button[1]);
        expect(deleteEquipment).toHaveBeenCalled();
        expect(deleteEquipment).toBeCalledWith(newEquipmentID.id);
        expect(getAllEquipments).toBeCalledWith(1);
    });
    it('should be call the funcion edit', () => {
        const button = wrapperComponent.getByText('Editar');        
        fireEvent.click(button);
        expect(selectEquipment).toHaveBeenCalled();
        expect(selectEquipment).toBeCalledWith(newEquipmentID.id);
    });

    it('should be change the page when the equipment to delete has the last', () => {
        const equipment2 ={
            codigo:456,
            nombre:'bascula2',
            ubicacion:'almacen2',
            id:2
        };
        const wrapperComponent2 = render(
            <CardEquipos
                allEquipments={[equipment2,newEquipmentID]} 
                currentPage={2}
                getEquipmentsByPage={getAllEquipments}
                {...equipment2}
                deleteEquipment={deleteEquipment}
                selectEquipment={selectEquipment}
            />
        );
        const button = wrapperComponent2.getAllByRole('button',{name:'Eliminar'});        
        fireEvent.click(button[1]);
        expect(deleteEquipment).toHaveBeenCalled();
        expect(deleteEquipment).toBeCalledWith(2);
        expect(getAllEquipments).toBeCalledWith(2);
    });
});
