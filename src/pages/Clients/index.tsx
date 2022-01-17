import Header from "../../components/Header";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import { ClientsStyle } from "./style";

const Clients = () => {
    return (
        <ClientsStyle>
            <div className="wrapper">
                <div className="header">
                    <Header title={"Clientes"} />
                </div>

                <div className="sidebar">
                    <MenuSidebar customClass={""} />
                </div>
            </div>
        </ClientsStyle>
    )
}

export default Clients;