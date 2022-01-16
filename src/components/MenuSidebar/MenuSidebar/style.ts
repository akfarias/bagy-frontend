import styled from "styled-components";

export const MenuSidebarStyle = styled.div`
    background-color: #363740;
    width: 20%;
    height: 100vh;
    font-family: 'Mulish', sans-serif;

    .bagy {
        padding: 18px;
    }

    .bagyLogo {
    }

    .bagyTitle {
        color: #C4C4C4;
        font-size: 24px;
        font-weight: 600;
        padding-left: 10px;
        margin-top: 15px;
        position: absolute;
    }

    .menuNav {
        &:hover {
            color: #FFF;
            background-color: #FC3C8D;
            opacity: 0.5;
            border: 1px solid #FFF;            
        }
    }

    .linkNav {
        color: #FFF;
        font-size: 20px;
        position: absolute;
        padding-top: 22px;
    }

    .overviewNav {
        width: 8%;
        margin: 20px;
    }
`