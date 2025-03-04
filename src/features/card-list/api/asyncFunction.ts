import axiosClassic from '../../../app/axios/axiosApi';
import { ITest } from '../../../shared/interfaces/api.interface';

export const getTests = async () => {
  try {
    const { data } = await axiosClassic.get('/tests');

    return data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};
export const getOneTest = async (id: number) => {
  try {
    const { data } = await axiosClassic.get(`/tests/${id}`);

    return data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};
export const getSites = async () => {
  try {
    const { data } = await axiosClassic.get('/sites');

    return data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};
