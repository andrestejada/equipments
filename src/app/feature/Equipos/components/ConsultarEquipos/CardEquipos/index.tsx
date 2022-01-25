import {
  BtnSecction,
  CardBox,
  CardContent,
  CardSecction,
  CardTitle,
} from './styled';
import { Button } from 'app/shared/components/Button';
import { EquipmentID } from '../../../models/Equipments';
import React from 'react';
import { formatDate } from 'app/shared/utils/formatDate';

interface CardProps {
  codigo: number | '';
  nombre: string;
  ubicacion: string;
  id: number;
  fecha:string|Date
  currentPage:number;
  allEquipments: EquipmentID[];
  deleteEquipment: (id: number) => void;
  selectEquipment: (id: number) => void;
  getEquipmentsByPage: (page?: number) => void;
}
export const CardEquipos = ({
  codigo,
  nombre,
  ubicacion,
  deleteEquipment,
  id,
  fecha,
  selectEquipment,
  getEquipmentsByPage,
  currentPage,
  allEquipments
}: CardProps) => {
  const handleDeleteEquipment=(id:number,currentPage:number)=>{
    if(allEquipments.length <= 1){
      deleteEquipment(id); 
      getEquipmentsByPage(currentPage - 1);
      return;
    }
    deleteEquipment(id); 
    getEquipmentsByPage(currentPage);
  };
  formatDate(fecha);
  return (
    <>
      <CardBox>
        <CardSecction>
          <CardTitle>Codigo:</CardTitle>
          <CardContent>{codigo}</CardContent>
        </CardSecction>
        <CardSecction>
          <CardTitle>Nombre:</CardTitle>
          <CardContent>{nombre}</CardContent>
        </CardSecction>
        <CardSecction>
          <CardTitle>Ubicación:</CardTitle>
          <CardContent>{ubicacion}</CardContent>
        </CardSecction>
        <CardSecction>
          <CardTitle>Fecha de Mantenimiento:</CardTitle>
          <CardContent>{ formatDate(fecha) }</CardContent>
        </CardSecction>

        <BtnSecction>
          <Button role="button" onClick={() => handleDeleteEquipment(id,currentPage)}>
            Eliminar
          </Button>
          <Button role="edit" onClick={() => selectEquipment(id)}>
            Editar
          </Button>
        </BtnSecction>
      </CardBox>
    </>
  );
};
