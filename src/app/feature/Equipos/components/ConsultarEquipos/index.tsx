import { ActionsEquipments } from 'app/core/redux/acciones/equipments/EquipmentTypes';
import { BuscadorEquipos } from '../BuscadorEquipos/index';
import { CardList } from './CardList/index';
import { EquipmentID } from '../../models/Equipments';
import React from 'react';
import { SearchEquipments } from '../../../../core/redux/reductores/Equipment/EquipmentReducer';
import { SinEquipos } from '../SinEquipos/index';
import { TerminoBusqueda } from '../TerminoBusqueda/index';
import { Typography } from 'app/shared/components/Typography';

interface Props {
  deleteEquipment: (id: number) => void;
  selectEquipment: (id: number) => void;
  getEquipmentsByPage: (page?: number) => void;
  getEquipmentBySearch: (termino: string) => void;
  getCurrentPage:(page:number)=>void;
  changePageTermSearch:(equipments:EquipmentID[])=>ActionsEquipments;
  totalCount: number;
  allEquipments: EquipmentID[];
  currentPage: number;
  searchEquipments: SearchEquipments;
}
export const ConsultarEquipos = (props: Props) => {
  const {
    allEquipments,
    getEquipmentBySearch,
    searchEquipments,
  } = props;
  return (
    <>
      <Typography tag="h2" styles={{ textAlign: 'center' }}>
        Consulta tus Equipos
      </Typography>

      {allEquipments.length || searchEquipments.term ? (
        <>
          <BuscadorEquipos getEquipmentBySearch={getEquipmentBySearch} />
          <TerminoBusqueda
            {...props}
          />
          <CardList {...props} />
        </>
      ) : (
        <SinEquipos />
      )}
    </>
  );
};
