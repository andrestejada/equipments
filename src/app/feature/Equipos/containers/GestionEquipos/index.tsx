import { Container, Row } from './styles';
import { ConsultarEquipos } from '../../components/ConsultarEquipos/index';
import { Equipment } from '../../models/Equipments';
import { FormCrearEquipos } from '../../components/FormCrearEquipos';
import React from 'react';

interface Props{
  addNewEquipment:(equip:Equipment)=> void
}
export const GestionEquipos= ({addNewEquipment}:Props) => {
  return (
    <Container>
      <Row>
        <FormCrearEquipos
          addNewEquipment={addNewEquipment}
        />
      </Row>
      <Row>
        <ConsultarEquipos/>
      </Row>
    </Container>
  );
};
