import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { loadGameData, resetGameData } from '../../utils/storage';
import RankingTable from './RankingTable';

const RankingBoard = () => {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    const data = loadGameData();
    if (Array.isArray(data)) {
      setRankingData(data);
    }
  }, []);

  const handleReset = () => {
    resetGameData();
    setRankingData([]);
  };

  return (
    <RankingContainer>
      <RankingHeader>
        <h1>랭킹</h1>
        <button onClick={handleReset}>🔃 초기화</button>
      </RankingHeader>
      <RankingTable data={rankingData} />
    </RankingContainer>
  );
};

export default RankingBoard;

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 60%;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const RankingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  & h1 {
    font-size: 1.5rem;
    font-weight: 700;
    flex-grow: 1;
    text-align: center;
  }

  & button {
    position: absolute;
    right: 0;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.black};
    text-align: right;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkgray};
    }
  }
`;
