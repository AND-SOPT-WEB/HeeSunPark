import React from 'react';
import styled from '@emotion/styled';

const RankingBoard = () => {
  return (
    <RankingContainer>
      <RankingHeader>
        <h1>랭킹</h1>
        <button>🔃 초기화</button>
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
          <TableRow>
            <TableCell>2024-11-05 10:00</TableCell>
            <TableCell>레벨 1</TableCell>
            <TableCell>10분</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2024-11-05 10:30</TableCell>
            <TableCell>레벨 2</TableCell>
            <TableCell>15분</TableCell>
          </TableRow>
          {/* 더 많은 행을 추가할 수 있습니다 */}
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
    position: absolute; /* 절대 위치 지정 */
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
  padding: 1rem; /* 셀 내부 여백 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-weight: bold;
`;

const TableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.lightgray}; /* 본문 배경색 */
`;

const TableCell = styled.td`
  padding: 1rem;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;
