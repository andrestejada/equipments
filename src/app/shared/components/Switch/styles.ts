import styled from 'styled-components';

interface Props {
  toggle:boolean
}

export const SwitchContainer = styled.div`
  width: 40px;
`;

export const SwitchWrapper = styled.div<Props>`
  background-color: ${({toggle})=> toggle ? '#5380ae' : '#f1f8ff' };
  width: 100%;
  height: 20px;
  border-radius: 20px;
  position: relative;
  padding: 2px;
  transition: 0.4s ease;
`;

export const ButtonSwitch = styled.button<Props>`
  width: 16px;
  height: 16px;
  background-color: white;
  background-color:${({toggle})=> toggle ? '#23394d' : '#6cb9ff' } ;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: ${({toggle: toggle})=> toggle ? '22px' : '2px' };
  transition: 0.4s ease;
  color: white;
  border: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  box-shadow: 0px 0px 3px 0px #c9e4ff;
  svg{
    display: block;
    fill: ${({toggle})=> toggle ? '#ffff33' : '#ffff00' } ;
    margin: 0 ;
    transition: 0.4s ease;
  }
`;