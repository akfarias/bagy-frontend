import styled from "styled-components";

export const CardStyle = styled.div`
    background-color: #FFF;
    display: flex;
    width: 241px;
    margin: 0 12px;
    margin-top: 30px;
    margin-bottom: 20px;
    height: 100px;
    padding: 13px;
    border: 1px solid #DDE2FF;
    border-radius: 10px;
    font-family: 'Mulish', sans-serif;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: inline-block;
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