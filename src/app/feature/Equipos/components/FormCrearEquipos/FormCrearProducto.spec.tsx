import '@testing-library/jest-dom/extend-expect';
import { fireEvent, prettyDOM, render } from '@testing-library/react';
import { FormCrearEquipos } from './index';
import React from 'react';
import { newEquipment } from '../../../../shared/fixture/testData';

const addNewEquipment= jest.fn();

describe('Name of the group', () => {
    let wrapperComponent = render(
        <FormCrearEquipos
            addNewEquipment={addNewEquipment}
        />
    );
    beforeEach(()=>{
        wrapperComponent = render(
            <FormCrearEquipos
                addNewEquipment={addNewEquipment}
            />
        );
        jest.clearAllMocks();
    });
    it('should render corrrectly', () => {
        expect(wrapperComponent).toMatchSnapshot();
    });

 
    it('should be find the alert when press submit button', async() => {
        const button = wrapperComponent.getByText('Ingresar');
        fireEvent.click(button);  
        const errors = await  wrapperComponent.findAllByText(/requerid/i);
        expect(errors[0]).toBeInTheDocument();
        expect(errors[0].textContent).toBe('El codigo es requerido');
        expect(errors[1]).toBeInTheDocument();
        expect(errors[1].textContent).toBe('El nombre es requerido');
        expect(errors[2]).toBeInTheDocument();
        expect(errors[2].textContent).toBe('La ubicacion es requerida');
    });

    it('the form should be submit correctly', async() => {
        const {codigo,nombre,ubicacion} = newEquipment;
            const button = wrapperComponent.getByText('Ingresar');
            fireEvent.change(wrapperComponent.getByPlaceholderText(/ingresa un codigo/i),{target:{value:codigo}});
            fireEvent.change(wrapperComponent.getByPlaceholderText(/ingresa un nombre/i),{target:{value:nombre}});
            fireEvent.change(wrapperComponent.getByRole(/ubicacion/i),{target:{value:ubicacion}});
            fireEvent.click(button);  
            const codeValue = await wrapperComponent.findByPlaceholderText(/ingresa un codigo/i); 
            expect(codeValue).toHaveTextContent('');            
            expect(addNewEquipment).toHaveBeenCalled();        
            expect(addNewEquipment).toHaveBeenCalledWith(newEquipment);   
               
    });
});