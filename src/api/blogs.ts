import { AxiosClient } from './axios-client';
import { IBlog } from '../constant/interfaces';

const PATH = '/blogs';

const BlogAPI = {
  get: async () => {
    const res: IBlog[] = await AxiosClient.get(PATH);
    return res;
  }
};
export default BlogAPI;
