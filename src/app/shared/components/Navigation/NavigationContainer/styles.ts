import styled from 'styled-components';

export const Container =styled.div`
    width: 100%;
    height: 70px;
    background-color: #23394d;
`;
export const Wrapper =styled.div`
    width: 100%;
    height: 100%;
    padding:0.5rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    svg{
        display:none;
    }
    @media screen and (max-width: 700px) {
        svg{
            display:block;
            fill:#ff6f00;
            font-size:2em;
            cursor:pointer;
        }
    }
    
`;