import { ADD_NEW_EQUIPMENT, ActionsEquipments, DELETE_EQUIPMENT,GET_ALL_EQUIPMENTS } from './EquipmentTypes';
import { Equipment, EquipmentID } from '../../../../feature/Equipos/models/Equipments';
import { Dispatch } from 'redux';
import { EquipmentRepository } from '../../../api/equipments.repository';


const {addEquipment,getAllEquipment,deleteEquipment} = EquipmentRepository;

export const addNewEquipmentAsync=(equipment:Equipment)=>{
    return  async(dispatch:Dispatch<ActionsEquipments>)=>{
        const {data} = await addEquipment(equipment);
        dispatch(addNewEquipment(data));
    };
};

export const addNewEquipment=(equip:EquipmentID):ActionsEquipments=>({
    type:ADD_NEW_EQUIPMENT,
    payload:equip
});

export const getAllEquipmentAsync=()=>{
    return  async(dispatch:Dispatch<ActionsEquipments>)=>{
            const {data} = await getAllEquipment();
            dispatch(getEquipments(data));
    };
};

export const getEquipments=(equip:EquipmentID[]):ActionsEquipments=>({
    type:GET_ALL_EQUIPMENTS,
    payload:equip
});

export const deleteEquipmentAsync=(id:number)=>{
    return async(dispatch:Dispatch<ActionsEquipments>)=>{
            await deleteEquipment(id);
            dispatch(deleteEquipmentById(id));
    };
};

export const deleteEquipmentById =(id:number):ActionsEquipments=>({
    type:DELETE_EQUIPMENT,
    payload:id
});