import { paginateTermSearch } from './paginateTermSearch';
import { testDataPagination } from '../../../shared/fixture/testData';

describe('testin the fn paginateTermsSearch', () => {
  it('should be return the second page of the total arr[] ', () => {
    const pageOfEquipments = paginateTermSearch(2,testDataPagination);
    expect(pageOfEquipments).toEqual([testDataPagination[testDataPagination.length -1 ]]);
  });
  it('should be return the empty arr is pass [empty] ', () => {
    const pageOfEquipments = paginateTermSearch(2,[]);
    expect(pageOfEquipments).toEqual([]);
  });
});