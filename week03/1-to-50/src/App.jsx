import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyle';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import RankingBoard from './components/RankingBoard';
import styled from '@emotion/styled';
import { useGameLogic } from './utils/gameLogic';

function App() {
  const [isRankingMode, setIsRankingMode] = useState(false); // 랭킹 모드
  const [gameLevel, setGameLevel] = useState('level1'); // 기본 레벨 설정
  const { timer } = useGameLogic(gameLevel);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        gameLevel={gameLevel}
        setGameLevel={setGameLevel}
        isRankingMode={isRankingMode}
        setIsRankingMode={setIsRankingMode}
        timer={timer}
      />
      <MainContainer>
        {isRankingMode ? (
          <RankingBoard /> // 랭킹 모드일 경우 랭킹 보드 렌더링
        ) : (
          <GameBoard gameLevel={gameLevel} />
        )}
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
`;
