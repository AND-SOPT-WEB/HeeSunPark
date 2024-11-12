import axios from 'axios';
import axiosInstance from './axiosConfig';
import {
  PostUserRequest,
  PostUserSuccessResponse,
  PostUserFailedResponse,
  PostLoginRequest,
  PostLoginSuccessResponse,
  PostLoginFailedResponse,
} from '../types/Auth';

// 회원가입 함수, 유저 등록
export const signUp = async (
  signUpData: PostUserRequest //요청 데이터 타입!
): Promise<PostUserSuccessResponse | PostUserFailedResponse> => {
  //성공, 실패 각 응답 타입
  try {
    const response = await axiosInstance.post<PostUserSuccessResponse>(
      '/user',
      signUpData
    );
    console.log('응답 데이터:', response.data);
    return response.data;
  } catch (error) {
    // 실패한 응답 처리
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as PostUserFailedResponse; // 실패 응답 반환
    }
    throw error;
  }
};

// 유저 로그인 함수
export const signIn = async (
  loginData: PostLoginRequest
): Promise<PostLoginSuccessResponse | PostLoginFailedResponse> => {
  try {
    const response = await axiosInstance.post<PostLoginSuccessResponse>(
      '/login',
      loginData
    );
    console.log('로그인 응답 데이터: ', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as PostLoginFailedResponse; // 로그인 실패 응답 반환
    }
    throw error;
  }
};
