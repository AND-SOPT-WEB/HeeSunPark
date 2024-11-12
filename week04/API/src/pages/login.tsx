import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signIn } from '../api/authApi';
import { PostLoginRequest } from '../types/Auth';

const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const loginData: PostLoginRequest = {
        username,
        password,
      };
      const response = await signIn(loginData);

      if ('result' in response) {
        localStorage.setItem('accessToken', response.result.token);
        console.log('로그인 요청결과:', response); // 요청 결과 콘솔로 출력
        alert('로그인이 완료되었습니다');
        navigate('/hobby');
      } else {
        alert('로그인에 실패했습니다');
      }
    } catch (error) {
      alert('로그인 요청 중 오류가 발생했습니다');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <main className='w-[30rem] bg-white flex flex-col justify-center items-center p-8 rounded-lg gap-4 shadow-md'>
        <header>
          <h1 className='w-full text-3xl font-bold mb-4'>로그인</h1>
        </header>
        <form className='flex flex-col gap-3 w-full'>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='아이디'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base text-base'
          />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='비밀번호'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base text-base'
          />

          <button
            type='submit'
            onClick={handleLogin}
            className='w-full p-5 rounded-lg border border-textSecondary text-lg bg-secondary text-white font-bold'
          >
            로그인
          </button>

          <Link to='/signup'>
            <p className='w-full text-center text-sm mt-1'>회원가입</p>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default login;
