import styled from '@emotion/styled';

const Header = ({
  gameLevel,
  setGameLevel,
  timer,
  isRankingMode,
  setIsRankingMode,
}) => {
  // 게임 레벨 변경 함수
  const handleLevelChange = (e) => {
    setGameLevel(e.target.value);
  };

  const handleRankingMode = () => {
    setIsRankingMode((prev) => !prev); // 랭킹 모드 on/off
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <h1>1 to 50</h1>
        <ButtonContainer>
          <GameButton isRankingMode={isRankingMode} onClick={handleRankingMode}>
            게임
          </GameButton>
          <LankButton isRankingMode={isRankingMode} onClick={handleRankingMode}>
            랭킹
          </LankButton>
        </ButtonContainer>
      </HeaderLeft>
      {!isRankingMode && (
        <HeaderRight>
          <select value={gameLevel} onChange={handleLevelChange}>
            <option value='level1'>Level 1</option>
            <option value='level2'>Level 2</option>
            <option value='level3'>Level 3</option>
          </select>
          <span>{timer.toFixed(2)}</span>
        </HeaderRight>
      )}
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
  gap: 1.5rem;

  & h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonStyles = `
  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;
  font-weight: 600;
`;

const GameButton = styled.button`
  ${ButtonStyles}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, isRankingMode }) =>
    !isRankingMode ? theme.colors.blue : theme.colors.darkblue};
`;

const LankButton = styled.button`
  ${ButtonStyles}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, isRankingMode }) =>
    isRankingMode ? theme.colors.blue : theme.colors.darkblue};
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 7rem;
  gap: 1rem;

  & select {
    background-color: white;
    border-radius: 1rem;
    padding: 0.3rem 1rem;
    text-align: center;
  }

  & span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;
