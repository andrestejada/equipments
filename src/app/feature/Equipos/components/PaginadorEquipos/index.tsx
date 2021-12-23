import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { NumberContainer, PaginadorContainer } from './styles';
import React, { useState } from 'react';
import { Button } from 'app/shared/components/Button';
import { usePaginator } from '../../hook/usePaginator';

interface Props {
  totalCount: number;
  getAllEquipments: (page?: number) => void;
}
export const Paginador = ({ totalCount, getAllEquipments }: Props) => {
  const {
    prevPage,
    nextPage,
    numberPage,
    currentPage,
    quantityOfPages,
    quantityOfButton,
  } = usePaginator({ totalCount, getAllEquipments });

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
