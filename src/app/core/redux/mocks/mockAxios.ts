import MockAdapter from 'axios-mock-adapter';
import { axiosIntance } from '../../config/AxiosConfig';


export const mockAxios = new MockAdapter(axiosIntance);