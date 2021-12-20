import {  EquipmentID } from '../../../../feature/Equipos/models/Equipments';
export const ADD_NEW_EQUIPMENT ='ADD_NEW_EQUIPMENT';
export const GET_ALL_EQUIPMENTS ='GET_ALL_EQUIPMENTS';
export const DELETE_EQUIPMENT ='DELETE_EQUIPMENT';


interface AddNewEquipment{
    type: typeof ADD_NEW_EQUIPMENT,
    payload:EquipmentID
}
interface getAllEquipments{
    type: typeof GET_ALL_EQUIPMENTS,
    payload:EquipmentID[]
}

interface AccionDefaultState {
    type: '';
}

interface DeleteEquipment{
    type :typeof DELETE_EQUIPMENT,
    payload:number
}

export type ActionsEquipments = 
    |AddNewEquipment
    |getAllEquipments
    |AccionDefaultState
    |DeleteEquipment
;