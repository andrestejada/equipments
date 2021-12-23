import styled from 'styled-components';

export const PaginadorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  padding: 0.5rem;
  width: 100%;
  button {
    width: 0;
    flex-grow: 1;
  }
`;

export const NumberContainer = styled.div`
  margin: 0 2rem;
  width: 0;
  flex-grow: 5;
  display: flex;
  justify-content: center;
  gap: 0.4rem;

  button {
    max-width: 20%;
  }

  @media (max-width: 540px) {
    margin: 0 1rem;
    color: #fff;
  }

`;
