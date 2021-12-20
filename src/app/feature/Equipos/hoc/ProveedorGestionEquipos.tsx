
import { addNewEquipmentAsync,deleteEquipmentAsync, getAllEquipmentAsync ,} from '../../../core/redux/acciones/equipments/EquipmentActions';
import { EstadoGeneral } from '../../../core/redux/modelo/EstadoGeneral';
import { GestionEquipos } from '../containers/GestionEquipos';
import { connect } from 'react-redux';

const mapStateToProps = (state:EstadoGeneral) => {
  return state.equipos;
};

const mapDispatchToProps={
  addNewEquipment:addNewEquipmentAsync,
  getAllEquipments:getAllEquipmentAsync,
  deleteEquipment:deleteEquipmentAsync,
};

export const ProveedorGestionEquipos = connect(mapStateToProps,mapDispatchToProps)(GestionEquipos);
