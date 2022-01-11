import {
  ADD_NEW_EQUIPMENT,
  ActionsEquipments,
  CHANGE_PAGE_TERM_SEARCH,
  DELETE_EQUIPMENT,
  EDIT_EQUIPMENT,
  GET_CURRENT_PAGE,
  GET_EQUIPMENTS,
  GET_EQUIPMENT_BY_SEARCH,
  SELECT_EQUIPMENT,
} from '../../acciones/equipments/EquipmentTypes';
import { EquipmentID } from '../../../../feature/Equipos/models/Equipments';

export interface StateEquipmet {
  allEquipments: EquipmentID[];
  equipmentSelected: EquipmentID[];
  totalCount:number;
  currentPage:number;
  searchEquipments:SearchEquipments
}

export interface SearchEquipments{
  term:string;
  filteredEquipments:EquipmentID[];
  equipmentsPerPage:EquipmentID[]
}
export const initialState: StateEquipmet = {
  allEquipments: [],
  equipmentSelected: [],
  totalCount:0,
  currentPage:1,
  searchEquipments:{
    term:'',
    filteredEquipments:[],
    equipmentsPerPage:[]
  }
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
    case GET_EQUIPMENTS:
      return {
        ...state,
        allEquipments: action.payload.data,
        totalCount:action.payload.totalCount,
        searchEquipments:{
          term:'',
          filteredEquipments:[],
          equipmentsPerPage:[],
        },
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
    case GET_EQUIPMENT_BY_SEARCH:
      return {
        ...state,
        totalCount: action.payload.totalCount,
        currentPage:1,
        searchEquipments:{
          term: action.payload.term,
          filteredEquipments:action.payload.data,
          equipmentsPerPage: [...action.payload.data].slice(0,3)
        },
        allEquipments:action.payload.data
      };
    case CHANGE_PAGE_TERM_SEARCH:
      return{
        ...state,
        searchEquipments:{
          ...state.searchEquipments,
          equipmentsPerPage:action.payload
        }
      };
    default:
      return state;
  }
};
