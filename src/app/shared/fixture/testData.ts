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
export const testDataPagination=[
    {
        codigo:123,
        nombre:'bascula',
        ubicacion:'almacen',
        id:1     
    },
    {
        codigo:456,
        nombre:'licuadora',
        ubicacion:'fabrica',
        id:2     
    },
    {
        codigo:789,
        nombre:'computador',
        ubicacion:'laboratorio',
        id:3     
    },
    {
        codigo:14785,
        nombre:'ventilador',
        ubicacion:'fabrica',
        id:4     
    },
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
    equipmentSelected:[],
    currentPage:1,
    searchEquipments:{
        term:'',
        filteredEquipments:[],
        equipmentsPerPage:[]
    }

};
