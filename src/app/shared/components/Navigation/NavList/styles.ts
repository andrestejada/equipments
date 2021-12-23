import styled from 'styled-components';
interface Props{
   open:boolean
}
export const ListContainer =styled.ul<Props>`
   display:flex;

   @media screen and (max-width: 700px) {
      background-color:#23394d;
      flex-flow:column;
      left:${({open})=> open ? '0' : '-100%'};
      position: absolute;
      top: 70px;
      width:100%;
      align-items: center;
      transition: 0.5s all ease;
      z-index:10;
   }
// `;

