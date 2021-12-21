import '@testing-library/jest-dom/extend-expect';
import { fireEvent, prettyDOM, render, wait  } from '@testing-library/react';
import { newEquipment, newEquipmentID } from '../../../../shared/fixture/testData';
import { FormCrearEquipos } from './index';
import React from 'react';

const addNewEquipment= jest.fn();
const editEquipment= jest.fn();

describe('Name of the group', () => {
    let wrapperComponent = render(
        <FormCrearEquipos
            addNewEquipment={addNewEquipment}
            editEquipment={editEquipment}
            equipmentSelected={[]}
        />
    );
    beforeEach(()=>{
        wrapperComponent = render(
            <FormCrearEquipos
                addNewEquipment={addNewEquipment}
                editEquipment={editEquipment}
                equipmentSelected={[]}
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


    it('should find the value in the form when exist a equipment selected ', async() => {
        const wrapperComponent = render(
            <FormCrearEquipos
                addNewEquipment={addNewEquipment}
                editEquipment={editEquipment}
                equipmentSelected={[newEquipmentID]}
            />
        );

       expect(wrapperComponent.getByText('Edita el equipo seleccionado')).toBeInTheDocument();
       expect(wrapperComponent.getByText('Edita los datos')).toBeInTheDocument();
       expect(wrapperComponent.getByText('Editar')).toBeInTheDocument();
       expect(wrapperComponent.getAllByPlaceholderText(/ingresa un codigo/i)[1] ).toHaveValue(newEquipmentID.codigo);      
       expect(wrapperComponent.getAllByPlaceholderText(/ingresa un nombre para el equipo/i)[1] ).toHaveValue(newEquipmentID.nombre);      
       expect(wrapperComponent.getAllByRole(/ubicacion/i)[1] ).toHaveValue(newEquipmentID.ubicacion);      

    });
    it('should find the value in the form when exist a equipment selected ', async() => {
        const wrapperComponent = render(
            <FormCrearEquipos
                addNewEquipment={addNewEquipment}
                editEquipment={editEquipment}
                equipmentSelected={[newEquipmentID]}
            />
        );

       
       const button = wrapperComponent.getByText('Editar');
       const codigo =  wrapperComponent.getAllByPlaceholderText(/ingresa un codigo/i)[1];
       fireEvent.change(codigo,{target:{value:'456'}}); 
       fireEvent.click(button);
       await wrapperComponent.findAllByPlaceholderText(/ingresa un codigo/i);   
       expect(editEquipment).toHaveBeenCalled();     
       expect(editEquipment).toBeCalledWith({...newEquipmentID,codigo:456});     

    });
});