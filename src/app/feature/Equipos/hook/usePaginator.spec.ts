import { act, renderHook } from '@testing-library/react-hooks';
import { SearchEquipments } from '../../../core/redux/reductores/Equipment/EquipmentReducer';
import { usePaginator } from './usePaginator';

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
});
