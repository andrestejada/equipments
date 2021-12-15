import { ADD_NEW_EQUIPMENT, ActionsEquipments } from '../../acciones/equipments/EquipmentTypes';
import { Equipment } from '../../../../feature/Equipos/models/Equipments';


export interface StateEquipmet{
    allEquipments:Equipment[]
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
        default:
            return state;
    }
};