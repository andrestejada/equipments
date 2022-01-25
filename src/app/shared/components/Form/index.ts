import styled from 'styled-components';

export const Form = styled.form`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor };
  border-radius: 15px;
  background-color: ${({ theme }) => theme.form.background };
`;