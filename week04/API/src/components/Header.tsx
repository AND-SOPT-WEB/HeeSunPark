import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };
  return (
    <div>
      <header className='flex items-center bg-secondary h-14 justify-between p-6 text-white'>
        <section className='flex  gap-10'>
          <h1 className='text-lg font-bold'>💙 마이페이지 💙</h1>
          <nav className='flex items-center gap-5 text-base'>
            <Link to='/hobby'>✨취미</Link>
            <Link to='/mypage'>✨내 정보</Link>
          </nav>
        </section>

        <section>
          <button onClick={handleLogout} className='text-base'>
            로그아웃
          </button>
        </section>
      </header>
    </div>
  );
};

export default Header;
