import styled from "styled-components";

export const ChartStyle = styled.div`

h2 {
    font-family: 'Mulish', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #000; 
    padding-bottom: 8px;
    padding-left: 8px;
}

.month {
    font-family: 'Mulish', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #9FA2B4;
    padding-left: 8px;
}

.legend {
    display: flex;
    position: relative;
    margin-left: 400px;
    padding-bottom: 10px;

    .thisMonthLegend {
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #FC3C8D; 
        margin-right: 10px;
    }

    .lastMonthLegend {
        font-family: 'Mulish', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #C4C4C4; 
    }
}
`
