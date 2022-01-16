import styled from "styled-components";

export const TableProductsStyle = styled.div`

.products-container {
    background-color: #FFF;
    display: flex;
    width: 546px;
    height: 280px;
    padding: 20px;
    /* margin-top: -23%;
    margin-left: 58%; */
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    font-family: 'Mulish', sans-serif;
    overflow: hidden;

    .scroll {
        overflow: auto; 
        ::-webkit-scrollbar{width:7px;}
        ::-webkit-scrollbar-track{background:#C4C4C4;border-radius:16px}
        ::-webkit-scrollbar-thumb{background:#FC3C8D;border-radius:16px}
    }
              
    tr {
        display: flex;
        justify-content: space-between;
    }

    hr {
        background-color: #CCC;
        border: 0.1px solid #CCC;
        border-radius: 10px;
        width: 99%;            
    }

    .tableProducts {
        margin-top: 5px;
        font-size: 13px;

        .tableTitle {
            font-size: 25px;
            font-weight: 700;
            padding-bottom: 15px;
        }
    
        .product {
            color: #9FA2B4;
            margin: 10px 5px;
        };

        .store {
            font-family: 'Mulish', sans-serif;           
            font-weight: 600;
            color: #9FA2B4;
            margin: 10px 28px;
        };

        .blue {
            background-color: #2F80ED;
            border-radius: 8px;
            padding: 7px 13px;
            color: #FFF; 
            margin: 10px 30px;
        };

        .yellow {
            background-color: #FEC400;
            border-radius: 8px;
            padding: 7px 13px;
            color: #FFF; 
            margin: 10px 30px;
        };
    }
    
}
`