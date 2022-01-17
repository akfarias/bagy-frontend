import styled from "styled-components";

export const CardStyle = styled.div`
    background-color: #FFF;
    width: 241px;
    margin: 0 12px;
    margin-top: 30px;
    margin-bottom: 20px;
    height: 100px;
    padding: 13px;
    border: 1px solid #DDE2FF;
    border-radius: 10px;
    font-family: 'Mulish', sans-serif;
    align-items: center;
    text-align: center;
    display: inline-block;
    &:hover{
        color: #FC3C8D;
        border: 1px solid #FC3C8D;
        cursor: pointer;
    }

    .allInfo {
        display: inline-grid;
        align-items: center;
        text-align: center;
        align-content: center;

        .principalInfo {
            font-size: 20px;
            font-weight: 900;
            color: #C4C4C4;
            &:hover {
                cursor: pointer;
            }     
        }

        .info {     
            font-size: 40px;
            font-weight: 700;
            color: #000;
            &:hover {
                cursor: pointer;
            }     
        }
    }
     
`