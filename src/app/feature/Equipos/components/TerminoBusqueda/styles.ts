import styled from 'styled-components';

export const TerminoContainer = styled.div`
    width: 90%;
    height: max-content;
    margin: 0.5rem auto;
    padding: 0.5rem;
    border-radius: 15px;
    background-color: #e0f0ff;
    box-shadow: 0px 0px 3px 1px #c2ddf7;
    display: flex;
    flex-flow: column;
    align-items: center;
    svg{
        margin-right: 0.5rem;
    }

    button{
        width: 60%;
        background-color: #ff3b3b;
        height: 1.5rem;
        box-shadow: 0px 0px 4px 1px #fd575766;
        &:hover{
            background-color: #fd5757;
        }
    }

`;
export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    svg{
        fill: #3e8ace;
        font-size: 1.2rem;
    }
`;
// export const ResetContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
