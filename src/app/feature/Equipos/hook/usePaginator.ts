import { useState } from 'react';
interface Props {
  totalCount: number;
  getAllEquipments: (page?: number) => void;
}
export const usePaginator = ({ getAllEquipments, totalCount }: Props) => {
  const quantityOfPages = Math.ceil(totalCount / 3);
  const [currentPage, setCurrentPage] = useState(1);

  const quantityOfButton: number[] = [];
  for (let i = 1; i <= quantityOfPages; i++) {
    quantityOfButton.push(i);
  }

  const nextPage = () => {
    if (currentPage + 1 > quantityOfPages) {
      return;
    }
    getAllEquipments(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage <= 1) {
      return;
    }
    getAllEquipments(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };

  const numberPage = (page: number) => {
    getAllEquipments(page);
    setCurrentPage(page);
  };

  return {
    nextPage,
    prevPage,
    numberPage,
    quantityOfPages,
    currentPage,
    quantityOfButton
  };
};
