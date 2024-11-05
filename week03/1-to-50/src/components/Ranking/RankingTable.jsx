import React from 'react';
import styled from '@emotion/styled';

const RankingTable = ({ data }) => {
  const sortedData = data.slice().sort((a, b) => {
    if (b.level !== a.level) {
      return b.level.localeCompare(a.level);
    }
    return parseFloat(a.timeTaken) - parseFloat(b.timeTaken);
  });

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>타임스탬프</TableHeaderCell>
          <TableHeaderCell>레벨</TableHeaderCell>
          <TableHeaderCell>플레이 시간</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{data.endTime}</TableCell>
            <TableCell>{data.level}</TableCell>
            <TableCell>{data.timeTaken}초</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default RankingTable;

const TableContainer = styled.table`
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
