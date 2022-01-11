import { ActionsEquipments } from 'app/core/redux/acciones/equipments/EquipmentTypes';
import { CardContainer } from '../../../../../shared/components/CardContainer/index';
import { CardEquipos } from '../CardEquipos/index';
import { CardListContainer } from '../../../../../shared/components/CardList/CardList';
import { EquipmentID } from '../../../models/Equipments';
import { Paginador } from '../../PaginadorEquipos/index';
import React from 'react';
import { SearchEquipments } from '../../../../../core/redux/reductores/Equipment/EquipmentReducer';


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
  searchEquipments: SearchEquipments
}

export const CardList = ({
  deleteEquipment,
  selectEquipment,
  getEquipmentsByPage,
  totalCount,
  allEquipments,
  currentPage,
  searchEquipments,
  getCurrentPage,
  changePageTermSearch,
}: Props) => {

 const equimentsArr = searchEquipments.filteredEquipments.length ? searchEquipments.equipmentsPerPage : allEquipments;
  return (
    <>
    <CardContainer>
    <CardListContainer>

      {equimentsArr.map((equip) => (
        <CardEquipos
          key={equip.codigo}
          deleteEquipment={deleteEquipment}
          selectEquipment={selectEquipment}
          getEquipmentsByPage={getEquipmentsByPage}
          currentPage={currentPage}
          allEquipments={allEquipments}
          {...equip}
        />
      ))}
    </CardListContainer>
      <Paginador 
        totalCount={totalCount} 
        getEquipmentsByPage={getEquipmentsByPage}
        searchEquipments={searchEquipments}
        getCurrentPage={getCurrentPage}
        currentPage={currentPage}
        changePageTermSearch={changePageTermSearch}

      />
    </CardContainer>
    </>
  );
};
