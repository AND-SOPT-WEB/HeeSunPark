import axios from 'axios';
import axiosInstance from './axiosConfig';
import {
  GetMyHobbyFailedResponse,
  GetMyHobbySuccessResponse,
  GetUserHobbySuccessResponse,
  GetUserHobbyFailedResponse,
} from '../types/hobby';

// token은 axiosInstance에 정의함
// 내 취미 조회 함수
export const getMyHobby = async (): Promise<
  GetMyHobbySuccessResponse | GetMyHobbyFailedResponse
> => {
  try {
    const response = await axiosInstance.get<GetMyHobbySuccessResponse>(
      '/user/my-hobby'
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as GetMyHobbyFailedResponse;
    }
    throw error;
  }
};

// 다른 사용자의 취미를 조회하는 함수
export const getUserHobby = async (
  no: number
): Promise<GetUserHobbySuccessResponse | GetUserHobbyFailedResponse> => {
  try {
    const response = await axiosInstance.get<GetUserHobbySuccessResponse>(
      `/user/${no}/hobby`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as GetUserHobbyFailedResponse;
    }
    throw error;
  }
};
