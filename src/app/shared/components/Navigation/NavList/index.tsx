import { ListContainer } from './styles'; 
import {NavItem}  from '../NavItem';
import React from 'react';
import {Routes} from '../interfaces';

interface Props{
    items: Routes[]
    open:boolean;
    close?:()=>void
}
export const NavList = ({items,open,close}:Props) => {
    return (
        <ListContainer open={open} >
            {
                items.map((item)=>(
                    
                    <NavItem
                        key={item.label}
                        close={close}
                        {...item}
                    />
                ))
            }
        </ListContainer>
    );
};
