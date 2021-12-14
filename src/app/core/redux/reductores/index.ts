import { combineReducers } from 'redux';
import { equipmentReducer } from './Equipment/EquipmentReducer';
import productos from './productos/productosReductor';

export default combineReducers({ 
    productos,
    equipos:equipmentReducer 
});
