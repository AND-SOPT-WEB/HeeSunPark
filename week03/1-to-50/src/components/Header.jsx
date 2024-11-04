import styled from '@emotion/styled';

const Header = ({ gameLevel, setGameLevel }) => {
  // 게임 레벨 변경 함수
  const handleLevelChange = (e) => {
    setGameLevel(e.target.value);
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderTitle>1 to 50</HeaderTitle>
        <ButtonContainer>
          <GameButton>게임</GameButton>
          <LankButton>랭킹</LankButton>
        </ButtonContainer>
      </HeaderLeft>
      <HeaderRight>
        <LevelSelector value={gameLevel} onChange={handleLevelChange}>
          <option value='level1'>Level 1</option>
          <option value='level2'>Level 2</option>
          <option value='level3'>Level 3</option>
        </LevelSelector>
        <Score>0</Score>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.darkblue};
  padding: 1rem 4rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const GameButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  font-weight: 600;
`;

const LankButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  font-weight: 600;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 7rem;
  gap: 1rem;
`;

const LevelSelector = styled.select`
  background-color: white;
  border-radius: 1rem;
  padding: 0.3rem 1rem;
  text-align: center;
`;

const Score = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;
