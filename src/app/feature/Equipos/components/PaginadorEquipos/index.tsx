import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { NumberContainer, PaginadorContainer } from './styles';
import { ActionsEquipments } from 'app/core/redux/acciones/equipments/EquipmentTypes';
import { Button } from 'app/shared/components/Button';
import { EquipmentID } from '../../models/Equipments';
import React from 'react';
import { SearchEquipments } from 'app/core/redux/reductores/Equipment/EquipmentReducer';
import { usePaginator } from '../../hook/usePaginator';

interface Props {
  getEquipmentsByPage: (page?: number) => void;
  getCurrentPage: (page: number) => void;
  changePageTermSearch:(equipments:EquipmentID[])=>ActionsEquipments;
  currentPage: number;
  totalCount: number;
  searchEquipments: SearchEquipments;
}
export const Paginador = ({
  totalCount,
  getEquipmentsByPage,
  searchEquipments,
  getCurrentPage,
  currentPage,
  changePageTermSearch
}: Props) => {
  const { prevPage, nextPage, numberPage, quantityOfPages, quantityOfButton } =
    usePaginator({
      totalCount,
      getEquipmentsByPage,
      searchEquipments,
      getCurrentPage,
      changePageTermSearch,
    });
  return (
    <PaginadorContainer>
      <Button
        quantityOfPages={quantityOfPages}
        currentPage={currentPage}
        onClick={prevPage}
      >
        <FaAngleLeft />
      </Button>
      <NumberContainer role="number-button-container">
        {quantityOfButton.map((b) => (
          <Button
            key={b}
            onClick={() => numberPage(b)}
            currentPage={currentPage}
          >
            {b}
          </Button>
        ))}
      </NumberContainer>
      <Button
        onClick={nextPage}
        quantityOfPages={quantityOfPages}
        currentPage={currentPage}
      >
        <FaAngleRight />
      </Button>
    </PaginadorContainer>
  );
};
