import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { loadGameData, resetGameData } from '../utils/storage'; // 유틸리티 함수 임포트

const RankingBoard = () => {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    const data = loadGameData(); // 로컬 스토리지에서 데이터 불러오기
    if (Array.isArray(data)) {
      setRankingData(data);
    }
  }, []);

  const handleReset = () => {
    resetGameData(); // 로컬 스토리지 초기화
    setRankingData([]); // 상태 초기화
  };

  const sortedRankingData = rankingData.slice().sort((a, b) => {
    if (b.level !== a.level) {
      return b.level.localeCompare(a.level);
    }
    return parseFloat(a.timeTaken) - parseFloat(b.timeTaken);
  });

  return (
    <RankingContainer>
      <RankingHeader>
        <h1>랭킹</h1>
        <button onClick={handleReset}>🔃 초기화</button>
      </RankingHeader>

      <RankingTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>타임스탬프</TableHeaderCell>
            <TableHeaderCell>레벨</TableHeaderCell>
            <TableHeaderCell>플레이 시간</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedRankingData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.endTime}</TableCell>
              <TableCell>{data.level}</TableCell>
              <TableCell>{data.timeTaken}초</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </RankingTable>
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

const RankingTable = styled.table`
  width: 100%;
  margin-top: 2rem;
`;

const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.darkblue};
`;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-weight: bold;
`;

const TableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.lightgray};
`;

const TableCell = styled.td`
  padding: 1rem;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;
