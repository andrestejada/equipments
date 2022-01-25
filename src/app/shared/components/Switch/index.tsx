import { BsMoonFill,BsSunFill ,} from 'react-icons/bs';
import { ButtonSwitch , SwitchContainer, SwitchWrapper } from './styles';
import React, { useState } from 'react';
import { useTheme } from 'app/themes/useTheme';

export const Switch = () => {
  const {theme,toggleTheme} = useTheme();

  const currentToggle = theme.type === 'light' ? false : true;
  const [toggle, setToggle] = useState(currentToggle);
  const changePosition = () => {
    setToggle(!toggle);
    toggleTheme();
  };
  return (
    <>
      <SwitchContainer>
        <SwitchWrapper
          toggle={toggle}
        >
          <ButtonSwitch
            onClick={() => changePosition()}
            toggle={toggle}
          >
            {
              toggle ? <BsMoonFill/> : <BsSunFill/>
            }
          
          </ButtonSwitch>
        </SwitchWrapper>
      </SwitchContainer>
    </>
  );
};
