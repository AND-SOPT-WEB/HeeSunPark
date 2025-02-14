import { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosConfig';

// HTTP 요청을 처리하는 함수들을 정의해 두었음
// GET 요청 함수 (T: 응답데이터 타입)
export const getData = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.get<T>(url);
  return response.data;
};

// POST 요청 함수 (T: 요청 데이터 타입, R: 응답 데이터 타입)
export const postData = async <T, R>(
  url: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  const response = await axiosInstance.post<R>(url, data, config);
  return response.data;
};

// PUT 요청 함수 (T: 요청 데이터타입, R: 응답 데이터 타입)
export const putData = async <T, R>(
  url: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  const response = await axiosInstance.put<R>(url, data, config);
  return response.data;
};
