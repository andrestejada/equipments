import { EquipmentID } from '../../../../feature/Equipos/models/Equipments';
export const ADD_NEW_EQUIPMENT ='ADD_NEW_EQUIPMENT';
export const GET_ALL_EQUIPMENTS ='GET_ALL_EQUIPMENTS';
export const DELETE_EQUIPMENT ='DELETE_EQUIPMENT';
export const SELECT_EQUIPMENT ='SELECT_EQUIPMENT';
export const EDIT_EQUIPMENT ='EDIT_EQUIPMENT';


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
interface SelectEquipment{
    type :typeof SELECT_EQUIPMENT,
    payload:number
}

interface EditEquipment{
    type: typeof EDIT_EQUIPMENT,
    payload:EquipmentID
}
export type ActionsEquipments = 
    |AddNewEquipment
    |getAllEquipments
    |AccionDefaultState
    |DeleteEquipment
    |SelectEquipment
    |EditEquipment
;