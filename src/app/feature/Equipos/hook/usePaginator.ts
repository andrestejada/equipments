import { useEffect, useState } from 'react';
import { ActionsEquipments } from 'app/core/redux/acciones/equipments/EquipmentTypes';
import { EquipmentID } from '../models/Equipments';
import { SearchEquipments } from 'app/core/redux/reductores/Equipment/EquipmentReducer';
import { paginateTermSearch } from '../utils/paginateTermSearch';
interface Props {
  getEquipmentsByPage: (page?: number) => void;
  getCurrentPage: (page: number) => void;
  changePageTermSearch: (equipments: EquipmentID[]) => ActionsEquipments;
  totalCount: number;
  searchEquipments: SearchEquipments;
}
export const usePaginator = ({
  getEquipmentsByPage,
  totalCount,
  searchEquipments,
  getCurrentPage,
  changePageTermSearch,
}: Props) => {
  const quantityOfPages = Math.ceil(totalCount / 3);
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredEquipments } = searchEquipments;
  const quantityOfButton: number[] = [];
  for (let i = 1; i <= quantityOfPages; i++) {
    quantityOfButton.push(i);
  }

  useEffect(() => {
    getCurrentPage(currentPage);
  }, [currentPage, getCurrentPage]);

  const nextPage = () => {
    if (currentPage + 1 > quantityOfPages) {
      return;
    }
    if (filteredEquipments.length) {
      setCurrentPage(currentPage + 1);
      const resp = paginateTermSearch(currentPage + 1, filteredEquipments);
      changePageTermSearch(resp);
      return;
    }
    getEquipmentsByPage(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage <= 1) {
      return;
    }
    if (filteredEquipments.length) {
      setCurrentPage(currentPage - 1);
      const resp = paginateTermSearch(currentPage - 1, filteredEquipments);
      changePageTermSearch(resp);
      return;
    }
    getEquipmentsByPage(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };

  const numberPage = (page: number) => {
    if (filteredEquipments.length) {
      const resp = paginateTermSearch(page, filteredEquipments);
      changePageTermSearch(resp);
      setCurrentPage(page);
      return;
    }
    getEquipmentsByPage(page);
    setCurrentPage(page);
  };

  return {
    nextPage,
    prevPage,
    numberPage,
    quantityOfPages,
    currentPage,
    quantityOfButton,
  };
};
