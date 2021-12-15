import thunk, { ThunkDispatch } from 'redux-thunk';
import { ActionsEquipments } from '../acciones/equipments/EquipmentTypes';
import { StateEquipmet } from '../reductores/Equipment/EquipmentReducer';
import createMockStore from 'redux-mock-store';

const middlewares = [thunk];
type DispatchExts = ThunkDispatch<StateEquipmet, void, ActionsEquipments>;
export const mockStore = createMockStore<StateEquipmet,DispatchExts>(middlewares);