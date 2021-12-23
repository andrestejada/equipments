import {
  ADD_NEW_EQUIPMENT,
  ActionsEquipments,
  DELETE_EQUIPMENT,
  EDIT_EQUIPMENT,
  GET_ALL_EQUIPMENTS,
  SELECT_EQUIPMENT,
} from '../../acciones/equipments/EquipmentTypes';
import { EquipmentID } from '../../../../feature/Equipos/models/Equipments';
import { number } from 'prop-types';

export interface StateEquipmet {
  allEquipments: EquipmentID[];
  equipmentSelected: EquipmentID[];
  totalCount:number
}
export const initialState: StateEquipmet = {
  allEquipments: [],
  equipmentSelected: [],
  totalCount:0
};

export const equipmentReducer = (
  state: StateEquipmet = initialState,
  action: ActionsEquipments
): StateEquipmet => {
  switch (action.type) {
    case ADD_NEW_EQUIPMENT:{
      const [equip1,equip2] = state.allEquipments;
      return {
        ...state,
        allEquipments: [action.payload,...[equip1,equip2] ],
        totalCount: state.totalCount + 1
      };
    }
    case GET_ALL_EQUIPMENTS:
      return {
        ...state,
        allEquipments: action.payload.data,
        totalCount:action.payload.totalCount
      };
    case DELETE_EQUIPMENT:
      return {
        ...state,
        allEquipments: state.allEquipments.filter(
          (equip) => equip.id !== action.payload
        ),
        totalCount: state.totalCount - 1 
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
