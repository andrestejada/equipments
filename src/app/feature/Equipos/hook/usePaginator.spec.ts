import { act, renderHook } from '@testing-library/react-hooks';
import { SearchEquipments } from '../../../core/redux/reductores/Equipment/EquipmentReducer';
import { paginateTermSearch } from '../utils/paginateTermSearch';
import { testDataPagination } from '../../../shared/fixture/testData';
import { usePaginator } from './usePaginator';

jest.mock('../utils/paginateTermSearch',()=>({
  paginateTermSearch:jest.fn(),
}));

describe('testing in the usePaginador hook', () => {
  const totalCount = 5;
  const getEquipmentsByPage = jest.fn();
  const getCurrentPage = jest.fn();
  const changePageTermSearch = jest.fn();
  const searchEquipments: SearchEquipments = {
    equipmentsPerPage: [],
    filteredEquipments: [],
    term: '',
  };
  let wrapper = renderHook(() =>
    usePaginator({
      getEquipmentsByPage,
      totalCount,
      searchEquipments,
      getCurrentPage,
      changePageTermSearch,
    })
  );
  beforeEach(() => {
    wrapper = renderHook(() => usePaginator({
        getEquipmentsByPage,
        totalCount,
        searchEquipments,
        getCurrentPage,
        changePageTermSearch,
      }));
      jest.clearAllMocks();
  });
  test('testing next page', () => {
    const { result } = wrapper;
    act(() => {
      result.current.nextPage();
    });

    expect(result.current.currentPage).toBe(2);

    act(() => {
      result.current.nextPage();
    });
    expect(result.current.currentPage).toBe(2);
  });

  test('testing prev page funtion ', () => {
    const { result } = wrapper;
    act(() => {
      result.current.nextPage();
    });
    act(() => {
      result.current.prevPage();
    });
    expect(result.current.currentPage).toBe(1);
    act(() => {
      result.current.prevPage();
    });
    expect(result.current.currentPage).toBe(1);
  });

  it('testing number page with term search', () => {
    const searchEquipments: SearchEquipments = {
      equipmentsPerPage: [],
      filteredEquipments: testDataPagination,
      term: 'bas',
    };
    const wrapper = renderHook(() =>
    usePaginator({
      getEquipmentsByPage,
      totalCount,
      searchEquipments,
      getCurrentPage,
      changePageTermSearch,
    })
  );
    const { result } = wrapper;
    act(() => {
      result.current.numberPage(2);
    });
    expect(paginateTermSearch).toHaveBeenCalled();
    expect(paginateTermSearch).toHaveBeenCalledWith(2,testDataPagination);
  });
  it('testing next page function with term search', () => {
    const searchEquipments: SearchEquipments = {
      equipmentsPerPage: [],
      filteredEquipments: testDataPagination,
      term: 'bas',
    };
    const wrapper = renderHook(() =>
    usePaginator({
      getEquipmentsByPage,
      totalCount,
      searchEquipments,
      getCurrentPage,
      changePageTermSearch,
    })
  );
    const { result } = wrapper;
    act(() => {
      result.current.nextPage();
    });
    expect(paginateTermSearch).toHaveBeenCalled();
    expect(paginateTermSearch).toHaveBeenCalledWith(2,testDataPagination);
    
  });
  it('testing prev page function with term search', () => {
    const searchEquipments: SearchEquipments = {
      equipmentsPerPage: [],
      filteredEquipments: testDataPagination,
      term: 'bas',
    };
    const wrapper = renderHook(() =>
    usePaginator({
      getEquipmentsByPage,
      totalCount,
      searchEquipments,
      getCurrentPage,
      changePageTermSearch,
    })
  );
    const { result } = wrapper;
    act(() => {
      result.current.nextPage();
    });
    act(() => {
      result.current.prevPage();
    });
    expect(paginateTermSearch).toHaveBeenCalled();    
  });
});
