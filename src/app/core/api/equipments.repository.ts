import { Equipment, EquipmentID } from '../../feature/Equipos/models/Equipments';
import { axiosIntance } from '../config/AxiosConfig';

export const EquipmentRepository={
    addEquipment:(equipment:Equipment)=>axiosIntance.post('/equipments',equipment),
    getAllEquipment:()=>axiosIntance.get('/equipments'),
    deleteEquipment:(id:number)=>axiosIntance.delete(`/equipments/${id}`),
    editEquipment:(equipment:EquipmentID)=>axiosIntance.put(`/equipments/${equipment.id}`,equipment),
    getEquipments:(page:number = 1)=>axiosIntance.get(`/equipments/?_limit=3&_page=${page}&_sort=id&_order=desc`)
};