import { Link } from 'react-router-dom';
import { ListItem } from './styles';
import React from 'react';
import { Routes } from '../interfaces';

interface Props extends Routes{
    close?:()=>void
}

export const NavItem = ({url,label,close}:Props) => {
    return (
        <ListItem>
            <Link 
                to={url}
                onClick={close} 
            >
                {label}
            </Link>
        </ListItem>
    );
};
