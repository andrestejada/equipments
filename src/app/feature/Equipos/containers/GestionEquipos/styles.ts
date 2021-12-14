import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content:center;
`;
export const Row = styled.div`
  flex-basis:50%;
  @media (max-width: 768px) {
    flex-flow:colunm;
    flex-basis:100%
  }
`;

