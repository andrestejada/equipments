import {
  addNewEquipment,
  changePageTermSearch,
  deleteEquipmentById,
  editEquip,
  getCurrentPage,
  getEquipmentByTermSearch,
  getEquipments,
  selectEquipment,
} from '../../acciones/equipments/EquipmentActions';
import { equipmentReducer, initialState } from './EquipmentReducer';
import {
  newEquipmentID,
  stateWithData,
  testData,
  testDataPagination,
} from '../../../../shared/fixture/testData';
import { ActionsEquipments } from '../../acciones/equipments/EquipmentTypes';
describe('testing the equipmetReducer', () => {
  it('shoul be match with the default state', () => {
    const action: ActionsEquipments = { type: '' };
    const state = equipmentReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
  it('should be return the state with the new equipment', () => {
    const action = addNewEquipment(newEquipmentID);
    const state = equipmentReducer(initialState, action);
    expect(state.allEquipments.length).toBe(1);
    expect(state.allEquipments).toEqual([newEquipmentID]);
  });

  it('should be return the state with all equipments', () => {
    const action = getEquipments([newEquipmentID], 5);
    const state = equipmentReducer(initialState, action);
    expect(state.allEquipments.length).toBe(1);
    expect(state.allEquipments).toEqual([newEquipmentID]);
    expect(state.totalCount).toBe(5);
  });

  it('should be return the state without the equipment deleted', () => {
    const action = deleteEquipmentById(newEquipmentID.id);
    const state = equipmentReducer(stateWithData, action);
    expect(state.allEquipments.length).toBe(0);
  });

  it('should be have the equipment selecte ', () => {
    const action = selectEquipment(1);
    const state = equipmentReducer(stateWithData, action);
    expect(state.equipmentSelected.length).toBe(1);
    expect(state.equipmentSelected).toEqual([newEquipmentID]);
  });

  it('should be return the state with the equipment edited', () => {
    newEquipmentID.nombre = 'nombre Editado';
    const action = editEquip(newEquipmentID);
    const state = equipmentReducer(stateWithData, action);
    expect(state.allEquipments.length).toBe(1);
    expect(state.allEquipments).toEqual([
        {
            codigo: 123,
            nombre: 'nombre Editado',
            ubicacion: 'almacen',
            id: 1,
        },
    ]);
    const equip2={
        codigo:1234,
        nombre:'bascula2',
        ubicacion:'almacen2',
        id:2
    };
    const action2 = editEquip(equip2);
    const state2 = equipmentReducer(stateWithData, action2);
    expect(state2.allEquipments).toEqual(stateWithData.allEquipments);
  });

  it('should be return the new value', () => {
      const action = getCurrentPage(5);
      const state = equipmentReducer(initialState,action);
      expect(state.currentPage).toBe(5);
      expect(typeof state.currentPage).toBe('number');
      expect(state.currentPage).not.toBe(-5);
  });

  it('should be return the equipment by term search', () => {
    const action = getEquipmentByTermSearch(testDataPagination,'al',1);
    const state = equipmentReducer(initialState,action);
    console.log(state);
    expect(state.searchEquipments.term).toBe('al');
    expect(state.searchEquipments.filteredEquipments.length).toBe(4);
    expect(state.searchEquipments.equipmentsPerPage.length).toBe(3);
  });

  it('should be return the equipment in the other page', () => {
    
    const action = changePageTermSearch(testDataPagination);
    const state = equipmentReducer(initialState,action);
    expect(state.searchEquipments.equipmentsPerPage.length).toBe(4);
  });
});
