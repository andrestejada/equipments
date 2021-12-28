import {
  ADD_NEW_EQUIPMENT,
  ActionsEquipments,
  DELETE_EQUIPMENT,
  EDIT_EQUIPMENT,
  GET_ALL_EQUIPMENTS,
  GET_CURRENT_PAGE,
  SELECT_EQUIPMENT,
} from '../../acciones/equipments/EquipmentTypes';
import { EquipmentID } from '../../../../feature/Equipos/models/Equipments';

export interface StateEquipmet {
  allEquipments: EquipmentID[];
  equipmentSelected: EquipmentID[];
  totalCount:number;
  currentPage:number;
}
export const initialState: StateEquipmet = {
  allEquipments: [],
  equipmentSelected: [],
  totalCount:0,
  currentPage:1,
};

export const equipmentReducer = (
  state: StateEquipmet = initialState,
  action: ActionsEquipments
): StateEquipmet => {
  switch (action.type) {
    case ADD_NEW_EQUIPMENT:{
      return {
        ...state,
        allEquipments: [action.payload,...state.allEquipments ].filter((e,i)=>i <= 2),
        totalCount: state.totalCount + 1
      };
    }
    case GET_ALL_EQUIPMENTS:
      return {
        ...state,
        allEquipments: action.payload.data,
        totalCount:action.payload.totalCount,
      };
    case GET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: Math.max(action.payload , 1)
      };
    case DELETE_EQUIPMENT:
      return {
        ...state,
        allEquipments: state.allEquipments.filter(
          (equip) => equip.id !== action.payload
        ),
        totalCount: state.totalCount - 1,
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
