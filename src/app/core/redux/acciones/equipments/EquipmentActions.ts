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
} from './EquipmentTypes';
import {
  Equipment,
  EquipmentID,
} from '../../../../feature/Equipos/models/Equipments';
import { Dispatch } from 'redux';
import { EquipmentRepository } from '../../../api/equipments.repository';
import { filterSearchTerm } from '../../../../feature/Equipos/utils/filterSearchTerm';
import { getQueryPage } from '../../../../shared/utils/getQueryPage';

const { addEquipment, deleteEquipment ,editEquipment} = EquipmentRepository;

export const addNewEquipmentAsync = (equipment: Equipment) => {
  return async (dispatch: Dispatch<ActionsEquipments>) => {
    const { data } = await addEquipment(equipment);
    dispatch(addNewEquipment(data));
  };
};

export const addNewEquipment = (equip: EquipmentID): ActionsEquipments => ({
  type: ADD_NEW_EQUIPMENT,
  payload: equip,
});

export const getEquipmentBySearch=(termino:string)=>{
  return async(dispatch: Dispatch<ActionsEquipments>)=>{
    const resp = await EquipmentRepository.getAllEquipment();
    const data = resp.data;
    const filtedEquipments = filterSearchTerm(data,termino);
    const totalCount = filtedEquipments.length;
    dispatch(getEquipmentByTermSearch(filtedEquipments,termino,totalCount));
  };
};

export const getEquipmentByPageAsync = (page?:number) => {
  return async (dispatch: Dispatch<ActionsEquipments>) => {
    const resp = await EquipmentRepository.getEquipments(page);    
    const data = resp.data;
    const totalCount = +resp.headers['x-total-count'];
    dispatch(getEquipments(data,totalCount));
    // const currentPage = getQueryPage(resp.config.url);
    // dispatch(getCurrentPage(currentPage));
  };
};

export const getEquipments = (equip: EquipmentID[],totalCount:number): ActionsEquipments => ({
  type: GET_EQUIPMENTS,
  payload: {
    data:equip,
    totalCount
  },
});

export const deleteEquipmentAsync = (id: number) => {
  return async (dispatch: Dispatch<ActionsEquipments>) => {
    await deleteEquipment(id);
    dispatch(deleteEquipmentById(id));
  };
};

export const deleteEquipmentById = (id: number): ActionsEquipments => ({
  type: DELETE_EQUIPMENT,
  payload: id,
});

export const selectEquipment=(id: number):ActionsEquipments=>({
  type:SELECT_EQUIPMENT,
  payload:id
});


export const editEquipmentAsync = (equipment: EquipmentID)=>{
  return async (dispatch:Dispatch<ActionsEquipments>)=>{
      const {data} = await editEquipment(equipment);
      dispatch(editEquip(data));
  };
};

export const editEquip =(equipment: EquipmentID):ActionsEquipments=>({
  type:EDIT_EQUIPMENT,
  payload:equipment
});

export const getCurrentPage=(page:number):ActionsEquipments=>({
  type:GET_CURRENT_PAGE,
  payload:page
});

export const getEquipmentByTermSearch=(data:EquipmentID[],term:string,totalCount:number):ActionsEquipments=>({
  type:GET_EQUIPMENT_BY_SEARCH,
  payload:{
    data,
    term,
    totalCount
  }
});

export const changePageTermSearch=(equipments:EquipmentID[]):ActionsEquipments=>({
  type:CHANGE_PAGE_TERM_SEARCH,
  payload:equipments
});
