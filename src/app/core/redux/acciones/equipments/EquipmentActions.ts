import {
  ADD_NEW_EQUIPMENT,
  ActionsEquipments,
  DELETE_EQUIPMENT,
  EDIT_EQUIPMENT,
  GET_ALL_EQUIPMENTS,
  GET_CURRENT_PAGE,
  SELECT_EQUIPMENT,
} from './EquipmentTypes';
import {
  Equipment,
  EquipmentID,
} from '../../../../feature/Equipos/models/Equipments';
import { Dispatch } from 'redux';
import { EquipmentRepository } from '../../../api/equipments.repository';
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

export const getAllEquipmentAsync = (page?:number) => {
  return async (dispatch: Dispatch<ActionsEquipments>) => {
    const resp = await EquipmentRepository.getEquipments(page);    
    const data = resp.data;
    const totalCount = +resp.headers['x-total-count'];
    dispatch(getEquipments(data,totalCount));
    const currentPage = getQueryPage(resp.config.url);
    dispatch(getCurrentPage(currentPage));
  };
};

export const getEquipments = (equip: EquipmentID[],totalCount:number): ActionsEquipments => ({
  type: GET_ALL_EQUIPMENTS,
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