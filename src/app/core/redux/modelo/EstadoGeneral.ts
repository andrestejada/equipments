import { EstadoProducto } from './EstadoProducto';
import { StateEquipmet } from '../reductores/Equipment/EquipmentReducer';

export interface EstadoGeneral {
  productos: EstadoProducto;
  equipos:StateEquipmet
}
