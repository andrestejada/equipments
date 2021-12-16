import { Equipment } from '../../feature/Equipos/models/Equipments';
import { axiosIntance } from '../config/AxiosConfig';

export const EquipmentRepository={
    addEquipment:(equipment:Equipment)=>axiosIntance.post('/equipments',equipment),
    getAllEquipment:()=>axiosIntance.get('/equipments')
};