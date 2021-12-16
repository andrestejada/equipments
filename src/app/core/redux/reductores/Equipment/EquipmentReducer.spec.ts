import { addNewEquipment, getEquipments } from '../../acciones/equipments/EquipmentActions';
import { equipmentReducer, initialState } from './EquipmentReducer';
import { ActionsEquipments } from '../../acciones/equipments/EquipmentTypes';
import { newEquipmentID } from '../../../../shared/fixture/testData';
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
});