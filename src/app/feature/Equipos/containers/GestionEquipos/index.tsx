import { Container, Row } from './styles';
import { Equipment, EquipmentID } from '../../models/Equipments';
import { ConsultarEquipos } from '../../components/ConsultarEquipos/index';
import { FormCrearEquipos } from '../../components/FormCrearEquipos';
import React from 'react';
import { useEffect } from 'react';

interface Props{
  addNewEquipment:(equip:Equipment)=> void;
  getAllEquipments:()=> void;
  allEquipments:EquipmentID[];
}
export const GestionEquipos= ({addNewEquipment,getAllEquipments,allEquipments}:Props) => {
  useEffect(() => {
    getAllEquipments();
  }, [getAllEquipments]);
  return (
    <Container>
      <Row>
        <FormCrearEquipos
          addNewEquipment={addNewEquipment}
        />
      </Row>
      <Row>
        <ConsultarEquipos
          allEquipments={allEquipments}
        />
      </Row>
    </Container>
  );
};
