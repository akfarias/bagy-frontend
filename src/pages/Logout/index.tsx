import Header from "../../components/Header";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import { LogoutStyle } from "./style";

const Logout = () => {
    return (
        <LogoutStyle>
            <div className="wrapper">
                <div className="header">
                    <Header title={"Sair"} />
                </div>

                <div className="sidebar">
                    <MenuSidebar customClass={""} />
                </div>
            </div>
        </LogoutStyle>
    );
}

export default Logout;