import { fireEvent, render } from '@testing-library/react';
import { CardEquipos } from './index';
import React from 'react';
import { ThemeCustomProvider } from '../../../../../themes/ThemeProvider';
import { newEquipmentID } from '../../../../../shared/fixture/testData';

describe('testing in the CardEquipos component', () => {
    const deleteEquipment = jest.fn();
    const selectEquipment = jest.fn();
    const getAllEquipments = jest.fn();

    let wrapperComponent = render(
        <ThemeCustomProvider>
        <CardEquipos 
        {...newEquipmentID}
        deleteEquipment={deleteEquipment}
        selectEquipment={selectEquipment}
        allEquipments={[newEquipmentID]} 
        currentPage={2}
        getEquipmentsByPage={getAllEquipments}
        />
    </ThemeCustomProvider>
    );

    beforeEach(()=>{
        wrapperComponent = render(
            <ThemeCustomProvider>
                <CardEquipos 
                {...newEquipmentID}
                deleteEquipment={deleteEquipment}
                selectEquipment={selectEquipment}
                allEquipments={[newEquipmentID]} 
                currentPage={2}
                getEquipmentsByPage={getAllEquipments}
                />
            </ThemeCustomProvider>
            );
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
            fecha: '2022-01-25T05:00:00.000Z',
            id:2
        };
        const wrapperComponent2 = render(
            <ThemeCustomProvider>

                <CardEquipos
                    allEquipments={[equipment2,newEquipmentID]} 
                    currentPage={2}
                    getEquipmentsByPage={getAllEquipments}
                    {...equipment2}
                    deleteEquipment={deleteEquipment}
                    selectEquipment={selectEquipment}
                />
            </ThemeCustomProvider>
        );
        const button = wrapperComponent2.getAllByRole('button',{name:'Eliminar'});        
        fireEvent.click(button[1]);
        expect(deleteEquipment).toHaveBeenCalled();
        expect(deleteEquipment).toBeCalledWith(2);
        expect(getAllEquipments).toBeCalledWith(2);
    });
});
