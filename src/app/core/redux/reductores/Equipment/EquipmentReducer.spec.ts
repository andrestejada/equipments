import { addNewEquipment,deleteEquipmentById, editEquip, getEquipments, selectEquipment } from '../../acciones/equipments/EquipmentActions';
import { equipmentReducer, initialState } from './EquipmentReducer';
import { newEquipmentID, stateWithData } from '../../../../shared/fixture/testData';
import { ActionsEquipments } from '../../acciones/equipments/EquipmentTypes';
describe('testing the equipmetReducer', () => {
    it('shoul be match with the default state', () => {
        const action:ActionsEquipments = {type:''};
        const state = equipmentReducer(initialState,action);
        expect(state).toEqual(initialState);
    });
    it('should be return the state with the new equipment', () => {
        const action = addNewEquipment(newEquipmentID);
        const state = equipmentReducer(initialState,action);
        expect(state.allEquipments.length).toBe(1);
        expect(state.allEquipments).toEqual([newEquipmentID]);

    });

    it('should be return the state with all equipments', () => {
        const action = getEquipments([newEquipmentID]);
        const state = equipmentReducer(initialState,action);
        expect(state.allEquipments.length).toBe(1);
        expect(state.allEquipments).toEqual([newEquipmentID]);
    });

    it('should be return the state without the equipment deleted', () => {
        const action = deleteEquipmentById(newEquipmentID.id);
        const state = equipmentReducer(stateWithData,action);
        expect(state.allEquipments.length).toBe(0);
    });

    it('should be have the equipment selecte ', () => {
        const action = selectEquipment(1);
        const state = equipmentReducer(stateWithData,action);
        expect(state.equipmentSelected.length).toBe(1);
        expect(state.equipmentSelected).toEqual([newEquipmentID]);
    });

    it('should be return the state with the equipment edited', () => {
        newEquipmentID.nombre = 'nombre Editado';
        const action = editEquip(newEquipmentID);
        const state = equipmentReducer(stateWithData,action);
        expect(state.allEquipments.length).toBe(1);
        expect(state.allEquipments).toEqual([{
            codigo: 123,
            nombre: 'nombre Editado',
            ubicacion: 'almacen',
            id: 1
        }]);
        
        
    });
});