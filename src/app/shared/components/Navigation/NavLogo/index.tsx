import { Img, LogoContainer, TextLogo } from './styles';
import { Link } from 'react-router-dom';
import React from 'react';

interface Props{
    logo?:string;
    text:string;
}

export const NavLogo = ({logo,text}:Props) => {
    return (
        <LogoContainer>
            <Link to='/' >
                {
                    logo
                        ? <Img src={logo} alt={text}></Img>
                        : <TextLogo>{text}</TextLogo>
                }
            </Link>            
        </LogoContainer>
    );
};
