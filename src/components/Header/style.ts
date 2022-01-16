import styled from "styled-components";

export const HeaderStyle = styled.div`
header {
    .actions {
        width: 80%;
        display: flex;
        justify-content: flex-end;
        background-color: #FFF;
    
        .search {
            width: 3%;
            margin-top: 20px;
        }

        .notification {
            width: 3%;
            margin-top: 20px;
        }

        .divider {
            margin-top: 15px;
            width: 2%;
        }
        
        .user {
            font-family: 'Mulish', sans-serif;
            font-weight: 700;
            font-size: 16px;
            margin-top: 20px;
            width: 10%;
        }
    
        .avatar {
            width: 7%;
            margin-top: 10px;
        }
    }    

    h1 {
        font-family: 'Mulish', sans-serif;
        font-weight: 600;
        font-size: 20px;
        margin-left: 20%;
        width: 50%;
        margin-top: 20px;
    }
}
    
`