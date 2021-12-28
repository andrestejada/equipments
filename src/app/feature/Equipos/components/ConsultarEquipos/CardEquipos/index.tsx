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

interface CardProps {
  codigo: number | '';
  nombre: string;
  ubicacion: string;
  id: number;
  currentPage:number;
  allEquipments: EquipmentID[];
  deleteEquipment: (id: number) => void;
  selectEquipment: (id: number) => void;
  getAllEquipments: (page?: number) => void;
}
export const CardEquipos = ({
  codigo,
  nombre,
  ubicacion,
  deleteEquipment,
  id,
  selectEquipment,
  getAllEquipments,
  currentPage,
  allEquipments
}: CardProps) => {
  const handleDeleteEquipment=(id:number,currentPage:number)=>{
    if(allEquipments.length <= 1){
      deleteEquipment(id); 
      getAllEquipments(currentPage - 1);
      return;
    }
    deleteEquipment(id); 
    getAllEquipments(currentPage);
  };
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
