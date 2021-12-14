import { addNewEquipment, addNewEquipmentAsync } from './EquipmentActions';
import { newEquipment, newEquipmentID,  } from '../../../../shared/fixture/testData';
import { ADD_NEW_EQUIPMENT } from './EquipmentTypes';
import { mockAxios } from '../../mocks/mockAxios';
import { mockStore } from '../../mocks/mockstore';

const store = mockStore({});

describe('testing equipment actions', () => {
    it('should be match with the object', () => {
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
});