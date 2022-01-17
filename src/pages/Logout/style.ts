import styled from "styled-components";

export const LogoutStyle = styled.div`

    .wrapper {
        display: grid;

    .header { //ok
        grid-column-start: 2;
        grid-column-end: 20;
        grid-row-start: 1;
        grid-row-end: 1;
   }

   .sidebar { //ok 
      grid-column-start: 1;
      grid-column-end: 20;
      grid-row-start: 1;
      grid-row-end: 10;
    }
}
`