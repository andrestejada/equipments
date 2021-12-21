import { Container, Row } from './styles';
import { Equipment, EquipmentID } from '../../models/Equipments';
import { ConsultarEquipos } from '../../components/ConsultarEquipos/index';
import { FormCrearEquipos } from '../../components/FormCrearEquipos';
import React from 'react';
import { useEffect } from 'react';

interface Props {
  addNewEquipment: (equip: Equipment) => void;
  getAllEquipments: () => void;
  deleteEquipment: (id: number) => void;
  selectEquipment: (id: number) => void;
  editEquipment:(equipment:EquipmentID)=>void;
  allEquipments: EquipmentID[];
  equipmentSelected: EquipmentID[];
}
export const GestionEquipos = ({
  addNewEquipment,
  getAllEquipments,
  allEquipments,
  deleteEquipment,
  equipmentSelected,
  selectEquipment,
  editEquipment
}: Props) => {
  useEffect(() => {
    getAllEquipments();
  }, [getAllEquipments]);
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
          allEquipments={allEquipments}
          deleteEquipment={deleteEquipment}
          selectEquipment={selectEquipment}
        />
      </Row>
    </Container>
  );
};
