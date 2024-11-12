import Header from '../components/Header';
import { useState } from 'react';
import { updateUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

const mypage = () => {
  const [password, setPassword] = useState<string>('');
  const [hobby, setHobby] = useState<string>('');
  const navigate = useNavigate();

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();

    // 수정하려는 유저 데이터
    const updateData = {
      hobby: hobby || '',
      password: hobby || '',
    };

    // 취미와 비밀번호가 모두 빈 값일 때 알림
    if (hobby == '' && password == '') {
      alert('변경하려는 정보를 입력해주세요');
      return;
    }
    const response = await updateUser(updateData);

    if (response.code === 'success') {
      console.log(response.code);
      alert('내 정보가 변경되었습니다.');
      localStorage.removeItem('accessToken');
      navigate('/login');
    } else {
      console.log(response.code);
      alert('정보 변경에 실패했습니다.');
    }
  };

  return (
    <div>
      <Header />
      <main className='w-full flex flex-col items-center p-10'>
        <form className='bg-white w-[30rem] p-8 flex flex-col items-center gap-3 rounded-lg shadow-md'>
          <h1 className='text-xl font-bold mb-8 text-point'>
            내 정보 수정하기
          </h1>
          <div className='flex flex-col gap-4 w-full'>
            <label
              htmlFor='newpassword'
              className='font-bold text-base text-point'
            >
              새 비밀번호
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={password ?? ''}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base text-base'
            />
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <label
              htmlFor='newhobby'
              className='font-bold text-base text-point'
            >
              새 취미
            </label>
            <input
              type='text'
              id='hobby'
              name='hobby'
              value={hobby ?? ''}
              onChange={(e) => setHobby(e.target.value)}
              className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base text-base'
            />
          </div>

          <button
            type='submit'
            onClick={handleUpdateUser}
            className='w-full p-5 rounded-lg border border-textSecondary text-lg bg-secondary text-white font-bold'
          >
            수정하기
          </button>
        </form>
      </main>
    </div>
  );
};

export default mypage;
