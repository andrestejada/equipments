import {
  ADD_NEW_EQUIPMENT,
  ActionsEquipments,
  DELETE_EQUIPMENT,
  EDIT_EQUIPMENT,
  GET_ALL_EQUIPMENTS,
  SELECT_EQUIPMENT,
} from './EquipmentTypes';
import {
  Equipment,
  EquipmentID,
} from '../../../../feature/Equipos/models/Equipments';
import { Dispatch } from 'redux';
import { EquipmentRepository } from '../../../api/equipments.repository';

const { addEquipment, getAllEquipment, deleteEquipment ,editEquipment} = EquipmentRepository;

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

export const getAllEquipmentAsync = () => {
  return async (dispatch: Dispatch<ActionsEquipments>) => {
    const { data } = await getAllEquipment();
    dispatch(getEquipments(data));
  };
};

export const getEquipments = (equip: EquipmentID[]): ActionsEquipments => ({
  type: GET_ALL_EQUIPMENTS,
  payload: equip,
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