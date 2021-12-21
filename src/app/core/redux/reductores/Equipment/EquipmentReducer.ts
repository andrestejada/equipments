import {
  ADD_NEW_EQUIPMENT,
  ActionsEquipments,
  DELETE_EQUIPMENT,
  EDIT_EQUIPMENT,
  GET_ALL_EQUIPMENTS,
  SELECT_EQUIPMENT,
} from '../../acciones/equipments/EquipmentTypes';
import { EquipmentID } from '../../../../feature/Equipos/models/Equipments';

export interface StateEquipmet {
  allEquipments: EquipmentID[];
  equipmentSelected: EquipmentID[];
}
export const initialState: StateEquipmet = {
  allEquipments: [],
  equipmentSelected: [],
};

export const equipmentReducer = (
  state: StateEquipmet = initialState,
  action: ActionsEquipments
): StateEquipmet => {
  switch (action.type) {
    case ADD_NEW_EQUIPMENT:
      return {
        ...state,
        allEquipments: [...state.allEquipments, action.payload],
      };
    case GET_ALL_EQUIPMENTS:
      return {
        ...state,
        allEquipments: action.payload,
      };
    case DELETE_EQUIPMENT:
      return {
        ...state,
        allEquipments: state.allEquipments.filter(
          (equip) => equip.id !== action.payload
        ),
      };
    case SELECT_EQUIPMENT:
      return {
        ...state,
        equipmentSelected: state.allEquipments.filter(
          (equip) => equip.id === action.payload
        ),
      };
    case EDIT_EQUIPMENT:
      return {
        ...state,
        equipmentSelected: [],
        allEquipments: state.allEquipments.map((equip) =>
          equip.id === action.payload.id ? action.payload : equip
        ),
      };
    default:
      return state;
  }
};
