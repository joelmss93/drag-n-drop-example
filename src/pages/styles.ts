import styled, { css } from 'styled-components';

interface CardProps {
  isDragging?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 60px;
  background: #f5f5f5;
  border: 1px solid #000;
  border-radius: 4px;
  margin-bottom: 10px;

  ${({ isDragging }) =>
    isDragging &&
    css`
      background: #e0e0e0;
      border: 2px dashed #000;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      opacity: 0.5;
    `}

  p {
    font-size: 17px;
    font-weight: bold;
  }
`;
