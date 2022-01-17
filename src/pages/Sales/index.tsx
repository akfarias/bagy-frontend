import Header from "../../components/Header";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import { SalesStyle } from "./style";

const Sales = () => {
    return (
        <SalesStyle>
            <div className="wrapper">
                <div className="header">
                    <Header title={"Vendas"} />
                </div>

                <div className="sidebar">
                    <MenuSidebar customClass={""} />
                </div>
            </div>
        </SalesStyle>
    )
}

export default Sales;