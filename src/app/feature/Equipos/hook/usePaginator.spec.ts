import { act,renderHook,} from '@testing-library/react-hooks';
import { usePaginator } from './usePaginator';


describe('testing in the usePaginador hook', () => {
    const totalCount = 5;
    const getAllEquipments = jest.fn();
    let wrapper = renderHook(()=> usePaginator({totalCount,getAllEquipments}));
    beforeEach(()=>{
        wrapper = renderHook(()=> usePaginator({totalCount,getAllEquipments}));
    });
    test('testing next page', () => {
        const {result} = wrapper; 
        act(()=>{
            result.current.nextPage();
        });

        expect(result.current.currentPage).toBe(2);

        act(()=>{
            result.current.nextPage();
        });
        expect(result.current.currentPage).toBe(2);

    });    

    test('testing prev page funtion ', () => {
        const {result} = wrapper; 
        act(()=>{
            result.current.nextPage();
        });
        act(()=>{
            result.current.prevPage();
        });
        expect(result.current.currentPage).toBe(1);
        act(()=>{
            result.current.prevPage();
        });
        expect(result.current.currentPage).toBe(1);

    });
});