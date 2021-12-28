import { useEffect, useState } from 'react';
interface Props {
  totalCount: number;
  currentPage:number;
  getAllEquipments: (page?: number) => void;
}
export const usePaginator = ({ getAllEquipments, totalCount ,currentPage:page}: Props) => {
  const quantityOfPages = Math.ceil(totalCount / 3);
  const [currentPage, setCurrentPage] = useState(page);
  // useEffect(() => {
  //   getAllEquipments(page);
  //   console.log(page)
  // }, [page]);

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
