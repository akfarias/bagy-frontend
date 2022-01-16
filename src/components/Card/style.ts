import styled from "styled-components";

export const CardStyle = styled.div`
    background-color: #FFF;
    display: flex;
    width: 240px;
    height: 110px;
    padding: 15px;
    border: 1px solid #DDE2FF;
    border-radius: 10px;
    font-family: 'Mulish', sans-serif;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    text-align: center;
        &:hover{
            color: #FC3C8D;
            border: 2px solid #DDE2FF;
            cursor: pointer;
        } 

    .principalInfo {
        font-size: 20px;
        font-weight: 900;
        color: #C4C4C4;
            &:hover {
                color: #FC3C8D;
                cursor: pointer;
            }          
    }

    .info {
        font-size: 40px;
        font-weight: 700;
        color: #000;
            &:hover{
                color: #FC3C8D;
                cursor: pointer;
            } 
    
    }
     
`