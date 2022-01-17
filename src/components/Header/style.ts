import styled from "styled-components";

export const HeaderStyle = styled.div`
header {
    .actions {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        background-color: #FFF;
    
        .search {
            width: 3%;
            margin-top: 25px;
        }

        .notification {
            width: 3%;
            margin-top: 25px;
        }

        .divider {
            margin-top: 15px;
            width: 2%;
        }
        
        .user {
            font-family: 'Mulish', sans-serif;
            font-weight: 700;
            font-size: 16px;
            margin-top: 25px;
            //width: 10%;
            margin-right: 3%;
        }
    
        .avatar {
            margin-right: 2%;
            margin-top: 10px;
        }
    }    

    h1 {
        font-family: 'Mulish', sans-serif;
        font-weight: 700;
        font-size: 24px;
        margin-left: 10%;
        width: 50%;
        margin-top: 20px;
    }
}
    
`