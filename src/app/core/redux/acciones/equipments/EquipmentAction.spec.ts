import { ADD_NEW_EQUIPMENT, GET_ALL_EQUIPMENTS } from './EquipmentTypes';
import { addNewEquipment, addNewEquipmentAsync, getAllEquipmentAsync ,getEquipments } from './EquipmentActions';
import { newEquipment, newEquipmentID,  } from '../../../../shared/fixture/testData';
import { initialState} from '../../reductores/Equipment/EquipmentReducer';
import { mockAxios } from '../../mocks/mockAxios';
import { mockStore } from '../../mocks/mockstore';

let store = mockStore(initialState);

describe('testing equipment actions', () => {

    beforeEach(()=>{
        store = mockStore(initialState);
        //mockAxios.reset();
    });

    it('testing the addNewEquipment sync fn shoul be return the correct object', () => {
        const action = addNewEquipment(newEquipmentID);
        expect(action).toEqual({
            type:ADD_NEW_EQUIPMENT,
            payload:newEquipmentID
        });
    });
    
    it('should be add new date correctly and return the equipment save', async() => {
        mockAxios.onPost('/equipments').reply(200,newEquipmentID);
        await store.dispatch(addNewEquipmentAsync(newEquipment));
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:ADD_NEW_EQUIPMENT,
            payload:{
                ...newEquipment,
                id:expect.any(Number)
            }
        });
    });

    it('testing  getEquipments fn should be return the correct object ', () => {
        const action = getEquipments([newEquipmentID]);
        expect(action).toEqual({
            type:GET_ALL_EQUIPMENTS,
            payload:[newEquipmentID]
        });
    });

    it('should be get all the equipment en the db', async() => {
        mockAxios.onGet('/equipments').reply(200,[newEquipmentID]);
        await store.dispatch( getAllEquipmentAsync() );
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:GET_ALL_EQUIPMENTS,
            payload:[newEquipmentID]
        });
    });
});