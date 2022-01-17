import styled from "styled-components";

export const MenuLinkStyle = styled.div`

    .nav-item {
        color: #FFF;
        font-size: 20px;
        display: inline-block;
        padding: 20px;       
        
        .menu-link {
            color: #FFF;
            font-size: 20px;
            margin-left: 20px;
        }

        .icon {
            margin-left: 20px;
        }
        
        &:hover {
            background-color: #FC3C8D;
            opacity: 0.5;
            border: 1px solid #FFF; 
            padding: 20px;  
            width: 87%;     
        }
    }
`