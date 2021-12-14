
import { EstadoGeneral } from '../../../core/redux/modelo/EstadoGeneral';
import { GestionEquipos } from '../containers/GestionEquipos';
import { addNewEquipmentAsync } from '../../../core/redux/acciones/equipments/EquipmentActions';
import { connect } from 'react-redux';

const mapStateToProps = (state:EstadoGeneral) => {
  return state.equipos;
};

const mapDispatchToProps={
  addNewEquipment:addNewEquipmentAsync,
};

export const ProveedorGestionEquipos = connect(mapStateToProps,mapDispatchToProps)(GestionEquipos);
