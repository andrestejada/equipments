import {
  addNewEquipmentAsync,
  changePageTermSearch,
  deleteEquipmentAsync,
  editEquipmentAsync,
  getCurrentPage,
  getEquipmentByPageAsync,
  getEquipmentBySearch,
  selectEquipment,
} from '../../../core/redux/acciones/equipments/EquipmentActions';
import { EstadoGeneral } from '../../../core/redux/modelo/EstadoGeneral';
import { GestionEquipos } from '../containers/GestionEquipos';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.equipos;
};

const mapDispatchToProps = {
  addNewEquipment: addNewEquipmentAsync,
  getEquipmentsByPage: getEquipmentByPageAsync,
  deleteEquipment: deleteEquipmentAsync,
  editEquipment: editEquipmentAsync,
  getEquipmentBySearch,
  selectEquipment,
  getCurrentPage,
  changePageTermSearch
};

export const ProveedorGestionEquipos = connect(
  mapStateToProps,
  mapDispatchToProps
)(GestionEquipos);
