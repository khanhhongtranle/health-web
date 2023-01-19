import { AxiosClient } from './axios-client';
import { IExercise } from '../constant/interfaces';

const PATH = '/exercises';

const ExerciseAPI = {
  get: async () => {
    const res: IExercise[] = await AxiosClient.get(PATH);
    return res;
  }
};
export default ExerciseAPI;
