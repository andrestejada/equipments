import { Equipment,EquipmentID,  } from '../../feature/Equipos/models/Equipments';
import { StateEquipmet } from '../../core/redux/reductores/Equipment/EquipmentReducer';
export const newEquipment:Equipment={
    codigo:123,
    nombre:'bascula',
    ubicacion:'almacen',
    fecha: '2022-01-25T05:00:00.000Z',
};
export const newEquipmentID:EquipmentID={
    codigo:123,
    nombre:'bascula',
    ubicacion:'almacen',
    id:1,
    fecha: '2022-01-25T05:00:00.000Z',
};

export const testData=[
    {
        codigo:123,
        nombre:'bascula',
        ubicacion:'almacen',
        fecha: '2022-01-25T05:00:00.000Z',
        id:1     
    }
];
export const testDataPagination=[
    {
        codigo:123,
        nombre:'bascula',
        ubicacion:'almacen',
        fecha:'2022-01-20T05:00:00.000Z',
        id:1     
    },
    {
        codigo:456,
        nombre:'licuadora',
        ubicacion:'fabrica',
        fecha:'2022-01-21T05:00:00.000Z',
        id:2     
    },
    {
        codigo:789,
        nombre:'computador',
        ubicacion:'laboratorio',
        fecha:'2022-01-22T05:00:00.000Z',
        id:3     
    },
    {
        codigo:14785,
        nombre:'ventilador',
        ubicacion:'fabrica',
        fecha:'2022-01-23T05:00:00.000Z',
        id:4     
    },
];

export const stateWithData:StateEquipmet={
    allEquipments:[
        {
            codigo:123,
            nombre:'bascula',
            ubicacion:'almacen',
            id:1,
            fecha: '2022-01-25T05:00:00.000Z',
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
