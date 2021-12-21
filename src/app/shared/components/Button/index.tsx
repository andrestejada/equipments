import styled from 'styled-components';

export const Button = styled.button`
  background: #ff6f00;
  border-radius: 5px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 4px 1px #ffa764a6;
  color: #fff;
  cursor:pointer;
  display: block;
  height: 32px;
  margin: 0.5rem 0;
  text-align: center;
  transition:0.5s ease;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
  &:hover{
    background: #ff913d;

  }

  &[role="edit"]{
    background-color: #3e8ace;
    box-shadow: 0px 0px 4px 1px #90b1ce;
  }
`;
