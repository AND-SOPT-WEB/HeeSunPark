//취미 관련 타입 정의

//다른 사람 취미 조회
export interface GetUserHobbyRequest {
  //GET /user/{no}/my-hobby

  no: number;
  headers: {
    Authorization: string; // 로그인 시 받은 token
  };
}

export interface GetUserHobbySuccessResponse {
  result: {
    hobby: string;
  };
}

export interface GetUserHobbyFailedResponse {
  code: string;
}

//내 취미 조회
export interface GetMyHobbyRequest {
  // GET /user/my-hobby
  headers: {
    Authorization: string; // 로그인 시 받은 token
  };
}

export interface GetMyHobbySuccessResponse {
  result: {
    hobby: string;
  };
}

export interface GetMyHobbyFailedResponse {
  code: string;
}
