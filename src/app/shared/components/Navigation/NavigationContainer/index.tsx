import { Container, Wrapper } from './styles';
import React from 'react';

interface Props{
    children?: React.ReactElement | React.ReactElement[]
}

const NavigationContainer = ({children}:Props) => {
    return (
        <Container>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
        
    );
};

export default NavigationContainer;
