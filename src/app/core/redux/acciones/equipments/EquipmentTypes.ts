import { Equipment } from '../../../../feature/Equipos/models/Equipments';
export const ADD_NEW_EQUIPMENT ='ADD_NEW_EQUIPMENT';


interface AddNewEquipment{
    type: typeof ADD_NEW_EQUIPMENT,
    payload:Equipment
}

export type ActionsEquipments = 
    |AddNewEquipment
;