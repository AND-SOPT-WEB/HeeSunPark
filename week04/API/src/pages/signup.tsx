import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signUp } from '../api/authApi';
import {
  PostUserRequest,
  PostUserSuccessResponse,
  PostUserFailedResponse,
} from '../types/Auth';

const signup = () => {
  /* 입력 단계마다 다른 input을 보여주기 위해 state 사용 1: 이름, 2:비밀번호, 3:취미 */
  const [step, setStep] = useState(1);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hobby, setHobby] = useState('');

  const navigate = useNavigate();

  /* 각 입력 필드의 유효성 검사 상태를 객체로 관리 */
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    confirmPassword: false,
    hobby: false,
  });

  /* 입력 단계 증가시키고, 마지막엔 signUp api 호출 */
  const handleNextStep = async () => {
    if (step === 3) {
      try {
        const signUpData: PostUserRequest = {
          username,
          password,
          hobby,
        };
        const response: PostUserSuccessResponse | PostUserFailedResponse =
          await signUp(signUpData);

        console.log('회원가입 요청 결과:', response); // 요청 결과 콘솔로 출력

        if ('result' in response) {
          alert('회원가입이 완료되었습니다');
          navigate('/login');
        } else {
          alert('회원가입에 실패했습니다');
        }
      } catch (error) {
        alert('회원가입 요청 중 오류가 발생했습니다');
      }
    } else {
      setStep((prev) => prev + 1);
    }
  };

  /* 8자 이하 유효성 검사 함수 */
  const isValidLength = (value: string) => {
    return value.length > 8;
  };

  /* 입력과 동시에 비밀번호 유효성을 검사하는 함수 */
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    setErrors((prevErrors) => ({
      ...prevErrors,
      password: isValidLength(inputPassword),
      confirmPassword: inputPassword !== confirmPassword,
    }));
  };

  /* 비밀번호 확인에 입력한 값도 같이 검사함 */
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);

    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: inputConfirmPassword !== password,
    }));
  };

  /* 이름과 취미의 유효성 검사 */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputId: string
  ) => {
    const value = e.target.value;

    /* input id (username, hobby)에 대한 유효성 검사 */

    setErrors((prevErrors) => ({
      ...prevErrors,
      [inputId]: isValidLength(value), // 8자 이상이면 오류
    }));

    if (inputId === 'username') {
      setUserName(value);
    } else if (inputId === 'hobby') {
      setHobby(value);
    }
  };

  // 각 단계의 인풋이 비어있는지 검사
  /* 현재 단계의 입력 필드가 모두 채워졌는지 확인 */
  const isEmpty = () => {
    if (step === 1) return username !== '' && !errors.username;
    if (step === 2)
      return (
        password !== '' &&
        confirmPassword !== '' &&
        !errors.password &&
        !errors.confirmPassword
      );
    if (step === 3) return hobby !== '' && !errors.hobby;
    return false;
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <main className='w-[30rem] bg-white flex flex-col justify-center items-center p-8 rounded-lg gap-4 shadow-md'>
        <header>
          <h1 className='w-full text-3xl font-bold mb-4'>회원가입</h1>
        </header>
        <form className='w-full'>
          {step === 1 && (
            <div>
              <label
                htmlFor='username'
                className='block text-base font-base mb-5'
              >
                이름
              </label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={(e) => handleInputChange(e, 'username')}
                placeholder='사용자 이름을 입력해주세요'
                className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base text-base'
              />
              {errors.username && (
                <p className='text-red-600 mt-4 text-sm'>
                  이름은 8자 이하로 입력해주세요
                </p>
              )}
            </div>
          )}

          {step === 2 && (
            <div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-base font-base mb-5'
                >
                  비밀번호
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='비밀번호를 입력해주세요'
                  className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base text-base'
                />
              </div>

              <div>
                <input
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder='비밀번호 확인'
                  className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base text-base'
                />
              </div>
              {errors.password && (
                <p className='text-red-600 mt-4 text-sm'>
                  비밀번호를 8자 이하로 입력해주세요
                </p>
              )}
              {errors.confirmPassword && (
                <p className='text-red-600 mt-2 text-sm'>
                  비밀번호가 일치하지 않습니다.
                </p>
              )}
            </div>
          )}

          {step === 3 && (
            <div>
              <label htmlFor='hobby' className='block text-base font-base mb-5'>
                취미
              </label>
              <input
                type='text'
                id='hobby'
                name='hobby'
                value={hobby}
                onChange={(e) => handleInputChange(e, 'hobby')}
                placeholder='취미를 입력해주세요'
                className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base text-base'
              />
              {errors.hobby && (
                <p className='text-red-600 mt-4 text-sm'>
                  취미는 8자 이하로 입력해주세요
                </p>
              )}
            </div>
          )}

          <button
            type='button'
            onClick={handleNextStep}
            className={`w-full mt-4 rounded-lg p-5 text-base text-white ${
              isEmpty() ? 'bg-active' : 'bg-inactive'
            }`}
            disabled={!isEmpty()}
          >
            {step === 3 ? '회원가입' : '다음'}
          </button>
        </form>
        <div className='text-base'>
          <span>이미 회원이신가요? </span>
          <Link to='/login'>
            <span className='ml-1 text-point font-bold'>로그인</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default signup;
