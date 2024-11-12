import { Link } from 'react-router-dom';

const login = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <main className='w-[30rem] bg-white flex flex-col justify-center items-center p-8 rounded-lg gap-4 shadow-md'>
        <header>
          <h1 className='w-full text-3xl font-bold mb-4'>로그인</h1>
        </header>
        <form className='flex flex-col gap-3 w-full'>
          {/* 아이디, 비밀번호 input */}
          <input
            type='text'
            id='id'
            name='id'
            placeholder='아이디'
            className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base'
          />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='비밀번호'
            className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base'
          />

          {/* 로그인 버튼 및 회원가입 */}
          <button
            type='submit'
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
