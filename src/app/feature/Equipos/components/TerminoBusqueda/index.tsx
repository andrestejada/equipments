import { FaInfoCircle, FaWindowClose } from 'react-icons/fa';
import { InfoContainer, TerminoContainer } from './styles';
import { Button } from '../../../../shared/components/Button/index';
import React from 'react';
import { SearchEquipments } from '../../../../core/redux/reductores/Equipment/EquipmentReducer';

interface Props{
    getEquipmentsByPage: (page?: number) => void;
    getCurrentPage: (page: number) => void;
    searchEquipments:SearchEquipments;
}
export const TerminoBusqueda = ({searchEquipments,getEquipmentsByPage,getCurrentPage}:Props) => {
  const {term,filteredEquipments} = searchEquipments;
  let msg:string;
  filteredEquipments.length 
        ? msg='Su Termino de busqueda es '
        : msg='No se encontraron coincidencia con ';
  if(!filteredEquipments.length && !term) return null;
  return (
    <TerminoContainer>
      <InfoContainer>
        <FaInfoCircle />
        <p>{msg}<span style={{fontWeight:'bold'}} >{term}</span> </p>
      </InfoContainer>

      <Button
        type='button'
        onClick={()=>{getEquipmentsByPage(1); getCurrentPage(1); }}
      >
        <FaWindowClose />
        Quitar termino de busqueda
      </Button>
    </TerminoContainer>
  );
};
