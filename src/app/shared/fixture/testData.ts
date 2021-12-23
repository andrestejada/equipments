import { EquipmentID } from '../../feature/Equipos/models/Equipments';
import { StateEquipmet } from '../../core/redux/reductores/Equipment/EquipmentReducer';
export const newEquipment={
    codigo:123,
    nombre:'bascula',
    ubicacion:'almacen'
};
export const newEquipmentID:EquipmentID={
    codigo:123,
    nombre:'bascula',
    ubicacion:'almacen',
    id:1
};

export const testData=[
    {
        codigo:123,
        nombre:'bascula',
        ubicacion:'almacen',
        id:1     
    }
];

export const stateWithData:StateEquipmet={
    allEquipments:[
        {
            codigo:123,
            nombre:'bascula',
            ubicacion:'almacen',
            id:1     
        }
    ],
    totalCount:0,
    equipmentSelected:[]
};
