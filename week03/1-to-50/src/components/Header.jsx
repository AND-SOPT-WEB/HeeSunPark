import styled from '@emotion/styled';

const Header = () => {
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
        <LevelSelector>
          <option value='easy'>쉬움</option>
          <option value='medium'>보통</option>
          <option value='hard'>어려움</option>
        </LevelSelector>
        <Score>0</Score>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.darkblue};
  padding: 1rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
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
`;

const LankButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
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
  padding: 0.3rem 0.8rem;
  text-align: center;
`;

const Score = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;
