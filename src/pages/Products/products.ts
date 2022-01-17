import styled from "styled-components";

export const ProductsStyle = styled.div`

    .wrapper {
        display: grid;

        .header { 
            grid-column-start: 2;
            grid-column-end: 20;
            grid-row-start: 1;
            grid-row-end: 1;
        }

        .sidebar { 
            grid-column-start: 1;
            grid-column-end: 20;
            grid-row-start: 1;
            grid-row-end: 10;
        }
    }
`