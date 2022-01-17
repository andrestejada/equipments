import {
  ADD_NEW_EQUIPMENT,
  CHANGE_PAGE_TERM_SEARCH,
  DELETE_EQUIPMENT,
  EDIT_EQUIPMENT,
  GET_EQUIPMENTS,
  GET_EQUIPMENT_BY_SEARCH,
  SELECT_EQUIPMENT,
} from './EquipmentTypes';
import {
  addNewEquipment,
  addNewEquipmentAsync,
  changePageTermSearch,
  deleteEquipmentAsync,
  deleteEquipmentById,
  editEquip,
  editEquipmentAsync,
  getEquipmentByPageAsync,
  getEquipmentBySearch,
  getEquipmentByTermSearch,
  getEquipments,
  selectEquipment,
} from './EquipmentActions';
import {
  newEquipment,
  newEquipmentID,
} from '../../../../shared/fixture/testData';
import { initialState } from '../../reductores/Equipment/EquipmentReducer';
import { mockAxios } from '../../mocks/mockAxios';
import { mockStore } from '../../mocks/mockstore';
import { testData } from '../../../../shared/fixture/testData';

let store = mockStore(initialState);

describe('testing equipment actions', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    //mockAxios.reset();
  });

  it('testing the addNewEquipment sync fn shoul be return the correct object', () => {
    const action = addNewEquipment(newEquipmentID);
    expect(action).toEqual({
      type: ADD_NEW_EQUIPMENT,
      payload: newEquipmentID,
    });
  });

  it('should be add new date correctly and return the equipment save', async () => {
    mockAxios.onPost('/equipments').reply(200, newEquipmentID);
    await store.dispatch(addNewEquipmentAsync(newEquipment));
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: ADD_NEW_EQUIPMENT,
      payload: {
        ...newEquipment,
        id: expect.any(Number),
      },
    });
  });

  it('testing  getEquipments fn should be return the correct object ', () => {
    const action = getEquipments([newEquipmentID],5);
    expect(action).toEqual({
      type: GET_EQUIPMENTS,
      payload: {
        data:[newEquipmentID],
        totalCount:5
      },
    });
  });

  it('should be get all the equipment en the db', async () => {
    const url ='/equipments/?_limit=3&_page=1&_sort=id&_order=desc';
    mockAxios.onGet(url).reply(200,[newEquipmentID],{'x-total-count':5});
    await store.dispatch(getEquipmentByPageAsync());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: GET_EQUIPMENTS,
      payload: {
        data:[newEquipmentID],
        totalCount:5
      },
    });
  });

  it('testing the deleteEquipment fn should be return the correct object', () => {
    const action = deleteEquipmentById(2);
    expect(action).toEqual({
      type: DELETE_EQUIPMENT,
      payload: 2,
    });
  });

  it('should be delete the equipment by spefic id', async () => {
    const id = 2;
    mockAxios.onDelete(`/equipments/${id}`).reply(200);
    await store.dispatch(deleteEquipmentAsync(id));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: DELETE_EQUIPMENT,
      payload: 2,
    });
    expect(actions[0].payload).toEqual(expect.any(Number));
  });

  it('should be select the correct equipment', () => {
    const action = selectEquipment(2);
    expect(action).toEqual({
      type: SELECT_EQUIPMENT,
      payload: 2,
    });
  });

  it('should be match with the correct object ', () => {
    const action = editEquip(newEquipmentID);
    expect(action).toEqual({
      type: EDIT_EQUIPMENT,
      payload: newEquipmentID,
    });
  });

  it('should be editing the equipment by specfic id', async() => {
      const id = 1;
      mockAxios.onPut(`/equipments/${id}`).reply(200,newEquipmentID);
      await store.dispatch( editEquipmentAsync(newEquipmentID) );
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: EDIT_EQUIPMENT,
        payload: newEquipmentID,
      });
  });

  it('should be match with the correct payload', () => {
    const action = changePageTermSearch([newEquipmentID]);
    expect(action).toEqual({
      type:CHANGE_PAGE_TERM_SEARCH,
      payload:[newEquipmentID]
    });
  });

  it('should be match with the correct payload', () => {
    const action = getEquipmentByTermSearch(testData,'al',1);
    expect(action).toEqual({
      type: GET_EQUIPMENT_BY_SEARCH,
      payload: { 
        data: testData, 
        term: 'al', 
        totalCount: 1
      }
    });
  });

  it('should be dispatch changePageTermSearch with the equipments filtered', async() => {
    mockAxios.onGet('/equipments').reply(200,testData);
    await store.dispatch(getEquipmentBySearch('bas'));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: GET_EQUIPMENT_BY_SEARCH,
      payload: { 
        data: testData, 
        term: 'bas', 
        totalCount: 1
      }
    });
  });

});
