import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { NumberContainer, PaginadorContainer } from './styles';
import { Button } from 'app/shared/components/Button';
import React from 'react';
import { usePaginator } from '../../hook/usePaginator';

interface Props {
  totalCount: number;
  currentPage:number;
  getAllEquipments: (page?: number) => void;
}
export const Paginador = ({ totalCount, getAllEquipments,currentPage}: Props) => {
  const {
    prevPage,
    nextPage,
    numberPage,    
    quantityOfPages,
    quantityOfButton,
  } = usePaginator({ totalCount, getAllEquipments,currentPage});
  return (
    <PaginadorContainer>
      <Button
        quantityOfPages={quantityOfPages}
        currentPage={currentPage}
        onClick={prevPage}
      >
        <FaAngleLeft />
      </Button>
      <NumberContainer>
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
