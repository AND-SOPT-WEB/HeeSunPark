// 사용자 정보 관련 타입 정의
// 유저 회원가입
export interface PostUserRequest {
  username: string;
  password: string;
  hobby: string;
}

export interface PostUserSuccessResponse {
  result: {
    no: number;
  };
}

export interface PostUserFailedResponse {
  code: string;
}

//유저 로그인
export interface PostLoginRequest {
  username: string;
  password: string;
}

export interface PostLoginSuccessResponse {
  result: {
    token: string;
  };
}

export interface PostLoginFailedResponse {
  code: string;
}

//유저 정보 변경

export interface PutUserRequest {
  hobby: string;
  password: string;
  headers: {
    Authorization: string;
  };
}

export interface PutUserFailedResponse {
  code: string;
}
