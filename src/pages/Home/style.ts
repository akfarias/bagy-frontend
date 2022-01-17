import styled from "styled-components";


export const HomeStyle = styled.section`
   background-color: #FFF;
   
   .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, 1fr);
      position: absolute;
   }

   .header { 
      grid-column-start: 2;
      grid-column-end: 11;
      grid-row-start: 1;
      grid-row-end: 1;
   }

   .sidebar { 
      grid-column-start: 1;
      grid-column-end: 20;
      grid-row-start: 1;
      grid-row-end: 10;
   }

   .card { 
      grid-column-start: 4;
      grid-column-end: 10;
      grid-row-start: 2;
      grid-row-end: 2;
   }

   .lineChart { 
      grid-column-start: 4;
      grid-column-end: 7;
      grid-row-start: 3;
      grid-row-end: 3;
   }

   .cardLeft { 
      grid-column-start: 11;
      grid-column-end: 7;
      grid-row-start: 3;
      grid-row-end: 3;
   }     
  
   .fatured { 
      grid-column-start: 4;
      grid-column-end: 9;
      grid-row-start: 6;
      grid-row-end:6;
   }

   .products {
      grid-column-start: 6;
      grid-column-end: 11;
      grid-row-start: 6;
      grid-row-end: 6;
      grid-gap: 10px;
   } 

   p{ 
      margin: 0;
      font-size: 20px; 
      color: #000;
   }

   @media only screen and (min-width: 1024px) {
      .wrapper {
         grid-template-columns: 1fr 1fr minmax(160px, 1fr);
      }
   }
`