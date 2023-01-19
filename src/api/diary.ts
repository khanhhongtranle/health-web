import { AxiosClient } from './axios-client';
import { IDiary } from '../constant/interfaces';

const PATH = '/diary';

const DiaryAPI = {
  get: async () => {
    const res: IDiary[] = await AxiosClient.get(PATH);
    return res;
  }
};
export default DiaryAPI;
