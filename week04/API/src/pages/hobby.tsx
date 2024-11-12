import Header from '../components/Header';
const hobby = () => {
  return (
    <div>
      <Header />
      <main className='w-full flex flex-col items-center p-10'>
        <form className='bg-white w-[30rem] p-8 flex flex-col items-center gap-3 rounded-lg shadow-md'>
          <h1 className='text-xl font-bold mb-8 text-point'>취미</h1>
          <div className='flex flex-col gap-4 w-full'>
            <label
              htmlFor='newpassword'
              className='font-bold text-base text-point'
            >
              💙 나의 취미 💙
            </label>
            <p className='text-base mb-3'>독서</p>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <label
              htmlFor='newhobby'
              className='font-bold text-base text-point'
            >
              💙 다른 사람들의 취미 💙
            </label>
            <input
              type='text'
              id='newhobby'
              name='newhobby'
              placeholder='사용자 번호'
              className='w-full p-5 rounded-lg border border-textSecondary placeholder:text-base text-base'
            />
          </div>

          <button
            type='submit'
            className='w-full p-5 rounded-lg border border-textSecondary text-lg bg-secondary text-white font-bold'
          >
            검색
          </button>
        </form>
      </main>
    </div>
  );
};

export default hobby;
