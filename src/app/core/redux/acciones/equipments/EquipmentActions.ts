import {ADD_NEW_EQUIPMENT, ActionsEquipments,  } from './EquipmentTypes';
import { Dispatch } from 'redux';
import { Equipment } from '../../../../feature/Equipos/models/Equipments';
import { EquipmentRepository } from '../../../api/equipments.repository';


const {addEquipment} = EquipmentRepository;

export const addNewEquipmentAsync=(equipment:Equipment)=>{
    return  async(dispatch:Dispatch<ActionsEquipments>)=>{
        const {data} = await addEquipment(equipment);
        dispatch(addNewEquipment(data));
    };
};

export const addNewEquipment=(equip:Equipment):ActionsEquipments=>({
    type:ADD_NEW_EQUIPMENT,
    payload:equip
});