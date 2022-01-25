import styled from 'styled-components';

export const ListItem = styled.li`
    padding:0.5rem;    
    a{
        color:#fff;
        display:block;
        width:100%;
        transition: 0.4s ease;
        &:hover{
            color:#ff6f00
        }    
    }

    @media screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
    border: 1px solid #1c578c ;
      a{
        display:block;
        color:#ff6f00;
        width: 100%;
      }
   }
`;
