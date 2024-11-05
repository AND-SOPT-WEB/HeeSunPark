import React from 'react';
import styled from '@emotion/styled';

const Card = ({ number, isVisible, isSecondSet, onClick }) => {
  return (
    <StyledCard
      onClick={onClick}
      isVisible={isVisible}
      isSecondSet={isSecondSet}
    >
      {number}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isVisible, isSecondSet }) =>
    isVisible
      ? isSecondSet
        ? theme.colors.blue
        : theme.colors.darkblue
      : 'transparent'};
  color: ${({ theme, isVisible }) =>
    isVisible ? theme.colors.white : 'transparent'};
  font-size: 1.5rem;
  font-weight: 700;
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};

  &:hover {
    background-color: ${({ theme, isVisible, isSecondSet }) =>
      isVisible
        ? isSecondSet
          ? theme.colors.mediumblue
          : theme.colors.blue
        : 'transparent'};
  }
`;
