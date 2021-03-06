import styled from 'styled-components';

export const CardBox = styled.li`
    border: 1px solid ${({theme})=> theme.colors.borderColor};
    padding: 0.5rem;
    border-radius: 10px;
    background-color: ${({theme})=> theme.equipment.cardBg};
`;

export const CardSecction =styled.div`
    display: flex;
    margin: 0.3rem 0;
`;

export const CardTitle = styled.h4`
    font-weight: bold;
    font-size: 1rem;
    display: inline-block;
    margin: 0;
`;

export const CardContent= styled.p`
    margin-left: 0.3rem;
    text-transform: capitalize;
`;

export const BtnSecction =  styled.div`
    display: flex;
    justify-content: space-between;

    button{
        width: 48%;
    }
`;
