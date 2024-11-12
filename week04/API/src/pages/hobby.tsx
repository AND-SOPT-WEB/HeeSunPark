import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { getMyHobby, getUserHobby } from '../api/hobbyApi';

const hobby = () => {
  const [myHobby, setMyHobby] = useState<string>('');
  const [usernumber, setUserNumber] = useState<string>('');
  const [userHobby, setUserHobby] = useState<string>('');

  //내 취미 불러오기
  useEffect(() => {
    const fetchMyHobby = async () => {
      try {
        const response = await getMyHobby();
        console.log('취미 응답 값: ', response);

        if ('result' in response) {
          setMyHobby(response.result.hobby);
        } else {
          console.log('내 취미를 불러오는 데 실패했습니다. ', response.code);
        }
      } catch (error) {
        console.error('취미를 불러오는데 오류가 발생했습니다.', error);
      }
    };
    fetchMyHobby();
  }, []);

  const handleGetUserHobby = async (e: React.FormEvent) => {
    e.preventDefault();
    if (usernumber) {
      try {
        const response = await getUserHobby(Number(usernumber));
        console.log('사용자 취미 검색 결과: ', response);
        if ('result' in response) {
          setUserHobby(response.result.hobby);
        } else {
          alert('사용자 취미 조회에 실패했습니다.');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('사용자 번호를 입력해 주세요.');
    }
  };

  return (
    <div>
      <Header />
      <main className='w-full flex flex-col items-center p-10'>
        <form className='bg-white w-[30rem] p-8 flex flex-col items-center gap-3 rounded-lg shadow-md'>
          <h1 className='text-xl font-bold mb-8 text-point'>취미</h1>
          <div className='flex flex-col gap-4 w-full'>
            <p className='font-bold text-base text-point'>💙 나의 취미 💙</p>
            <p className='text-base mb-3'>{myHobby}</p>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <label
              htmlFor='usernumber'
              className='font-bold text-base text-point'
            >
              💙 다른 사람들의 취미 💙
            </label>
            <input
              type='text'
              id='usernumber'
              name='usernumber'
              value={usernumber ?? ''}
              onChange={(e) => setUserNumber(e.target.value)}
              placeholder='사용자 번호'
              className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base text-base'
            />
          </div>

          <button
            type='submit'
            onClick={handleGetUserHobby}
            className='w-full p-5 rounded-lg border border-textSecondary text-lg bg-secondary text-white font-bold'
          >
            검색
          </button>
          <p className='text-base mb-3'>
            {usernumber && userHobby
              ? `${usernumber}번 사용자의 취미는 ${userHobby}입니다.`
              : ''}
          </p>
        </form>
      </main>
    </div>
  );
};

export default hobby;
