import { filterSearchTerm } from './filterSearchTerm';
import { testDataPagination } from '../../../shared/fixture/testData';

describe('testing in the util filter search term fuction', () => {
  it('should be return one object with the correct term search', () => {
    const termsFiltered = filterSearchTerm(testDataPagination, 'li');
    expect(termsFiltered).toEqual([
      { codigo: 456, nombre: 'licuadora', ubicacion: 'fabrica', id: 2 },
    ]);
  });

  it('should be return and empty array when dont fount a correct termSearch', () => {
    const termsFiltered = filterSearchTerm(testDataPagination, 'testing');
    expect(termsFiltered).toEqual([]);
    expect(termsFiltered.length).toBe(0);
  });
});
