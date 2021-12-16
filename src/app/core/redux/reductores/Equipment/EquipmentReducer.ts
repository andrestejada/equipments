import { ADD_NEW_EQUIPMENT, ActionsEquipments, GET_ALL_EQUIPMENTS } from '../../acciones/equipments/EquipmentTypes';
import {  EquipmentID } from '../../../../feature/Equipos/models/Equipments';


export interface StateEquipmet{
    allEquipments:EquipmentID[]
}
export const initialState:StateEquipmet={
    allEquipments:[]
};

export const equipmentReducer =(state:StateEquipmet=initialState,action:ActionsEquipments):StateEquipmet=>{
    switch (action.type) {
        case ADD_NEW_EQUIPMENT:            
            return{
                ...state,
                allEquipments:[...state.allEquipments,action.payload]
            };
        case GET_ALL_EQUIPMENTS:            
            return{
                ...state,
                allEquipments:action.payload
            };
        default:
            return state;
    }
};