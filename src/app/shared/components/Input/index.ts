import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 10px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }

  &:focus{
    color: #212529;
    background-color: #fff;
    border-color: #febe86;
    outline: 0;
    box-shadow: 0 0 0 0.25rem #ffc1072e;
  }

  &[type="search"]{
    margin: 0;
    height: 100%;
    border-radius: 10px 0 0 10px;
  }
`;
