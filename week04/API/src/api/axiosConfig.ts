import axios from 'axios';

// 사용자 지정 config로 새로운 Axios 인스턴스 생성

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// JWT 토큰을 요청 헤더에 추가하는 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken') || '';
    console.log('토큰:', token);

    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
