import { EquipmentID } from '../../../../feature/Equipos/models/Equipments';
export const ADD_NEW_EQUIPMENT ='ADD_NEW_EQUIPMENT';
export const GET_EQUIPMENTS ='GET_EQUIPMENTS';
export const DELETE_EQUIPMENT ='DELETE_EQUIPMENT';
export const SELECT_EQUIPMENT ='SELECT_EQUIPMENT';
export const EDIT_EQUIPMENT ='EDIT_EQUIPMENT';
export const GET_CURRENT_PAGE ='GET_CURRENT_PAGE';
export const GET_EQUIPMENT_BY_SEARCH ='GET_EQUIPMENT_BY_SEARCH';
export const CHANGE_PAGE_TERM_SEARCH ='CHANGE_PAGE_TERM_SEARCH';


interface AddNewEquipment{
    type: typeof ADD_NEW_EQUIPMENT,
    payload:EquipmentID
}
interface getAllEquipments{
    type: typeof GET_EQUIPMENTS,
    payload:{
        data:EquipmentID[]
        totalCount:number
    }
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
interface getCurrentPage{
    type: typeof GET_CURRENT_PAGE,
    payload:number
}
interface getEquipmentByTermSearch{
    type: typeof GET_EQUIPMENT_BY_SEARCH,
    payload:{
        data:EquipmentID[];
        term:string;
        totalCount:number
    }
}
interface changePageTermSearch{
    type: typeof CHANGE_PAGE_TERM_SEARCH,
    payload:EquipmentID[];
}
export type ActionsEquipments = 
    |AddNewEquipment
    |getAllEquipments
    |AccionDefaultState
    |DeleteEquipment
    |SelectEquipment
    |EditEquipment
    |getCurrentPage
    |getEquipmentByTermSearch
    |changePageTermSearch
;