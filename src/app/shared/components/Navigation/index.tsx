import React, { useState } from 'react';
import {GiHamburgerMenu } from 'react-icons/gi';
import {IoMdClose } from 'react-icons/io';
import Logo from '../../../../assets/img/logo-equipos.png';
import { NavList } from './NavList';
import { NavLogo } from './NavLogo';
import NavigationContainer from './NavigationContainer';
import { Switch } from '../Switch/index';

export const Navigation = () => {
    const routes =[
        { label: 'Home', url: '/' },
        { label: 'Equipos', url: '/equipos' },
        { label: 'Productos', url: '/Productos' },
    ];
    const [toggle, setToggle] = useState(false);
    return (
        <NavigationContainer>
            <NavLogo logo={Logo} text='G-Met' />
            <Switch/>
            {
                toggle 
                ?<IoMdClose 
                    id='close-menu'
                    onClick={()=>setToggle(!toggle)}
                />
                :<GiHamburgerMenu
                    id='open-menu'
                    onClick={()=>setToggle(!toggle)
                }
                />
            }
            
            <NavList 
                items={routes}
                open={toggle}
                close={()=>setToggle(false)} 
            />
        </NavigationContainer>
    );
};
