import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyle';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import RankingBoard from './components/RankingBoard';
import { useTimer } from './utils/timer';
import styled from '@emotion/styled';

function App() {
  const [isGameActive, setIsGameActive] = useState(false); // 타이머 실행을 위한 변수
  const [isRankingMode, setIsRankingMode] = useState(false); // 랭킹 모드
  const [gameLevel, setGameLevel] = useState('level1'); // 기본 레벨 설정
  const { timer, setTimer, resetTimer } = useTimer(isGameActive);

  // 타이머 시작 및 종료를 담당하는 함수들
  const startGame = () => setIsGameActive(true);

  const stopGame = () => {
    setIsGameActive(false);
    alert(`게임 종료! 걸린 시간: ${timer.toFixed(2)}초`);
    resetTimer();
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        gameLevel={gameLevel}
        setGameLevel={setGameLevel}
        timer={timer}
        isRankingMode={isRankingMode}
        setIsRankingMode={setIsRankingMode}
      />
      <MainContainer>
        {isRankingMode ? (
          <RankingBoard /> // 랭킹 모드일 경우 랭킹 보드 렌더링
        ) : (
          <GameBoard
            gameLevel={gameLevel}
            startGame={startGame}
            stopGame={stopGame}
            setTimer={setTimer}
          />
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
