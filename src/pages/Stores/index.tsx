import Header from "../../components/Header";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import { StoresStyle } from "./style";

const Stores = () => {
    return (
        <StoresStyle>
            <div className="wrapper">
                <div className="header">
                    <Header title={"Lojas"} />
                </div>

                <div className="sidebar">
                    <MenuSidebar customClass={""} />
                </div>
            </div>
        </StoresStyle>
    );
}

export default Stores;