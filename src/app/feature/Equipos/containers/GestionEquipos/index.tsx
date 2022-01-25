import { Container, Row } from './styles';
import { Equipment, EquipmentID } from '../../models/Equipments';
import { ActionsEquipments } from 'app/core/redux/acciones/equipments/EquipmentTypes';
import { ConsultarEquipos } from '../../components/ConsultarEquipos/index';
import { FormCrearEquipos } from '../../components/FormCrearEquipos';
import React from 'react';
import { SearchEquipments } from '../../../../core/redux/reductores/Equipment/EquipmentReducer';
import { useEffect } from 'react';

interface Props {
  addNewEquipment: (equip: Equipment) => void;
  getEquipmentsByPage: () => void;
  deleteEquipment: (id: number) => void;
  selectEquipment: (id: number) => void;
  editEquipment:(equipment:EquipmentID)=>void;
  getEquipmentBySearch:(termino:string)=>void;
  getCurrentPage:(page:number)=>void;
  changePageTermSearch:(equipments:EquipmentID[])=>ActionsEquipments;
  allEquipments: EquipmentID[];
  equipmentSelected: EquipmentID[];
  totalCount:number;
  currentPage:number;
  searchEquipments:SearchEquipments;
}
export const GestionEquipos = ({
  addNewEquipment,
  allEquipments,
  changePageTermSearch,
  currentPage,
  deleteEquipment,
  editEquipment,
  equipmentSelected,
  getCurrentPage,
  getEquipmentBySearch,
  getEquipmentsByPage,
  searchEquipments,
  selectEquipment,
  totalCount,
}: Props) => {
  useEffect(() => {
    getEquipmentsByPage();
  }, [getEquipmentsByPage]);
  return (
    <Container>
      <Row>
        <FormCrearEquipos
          addNewEquipment={addNewEquipment}
          equipmentSelected={equipmentSelected}
          editEquipment={editEquipment}
        />
      </Row>
      <Row>
        <ConsultarEquipos
          deleteEquipment={deleteEquipment}
          getEquipmentsByPage={getEquipmentsByPage}
          allEquipments={allEquipments}
          selectEquipment={selectEquipment}
          totalCount={totalCount}
          currentPage={currentPage}
          getEquipmentBySearch={getEquipmentBySearch}
          searchEquipments={searchEquipments}
          getCurrentPage={getCurrentPage}
          changePageTermSearch={changePageTermSearch}
        />
      </Row>
    </Container>
  );
};
