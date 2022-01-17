import Header from "../../components/Header";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import { PlansStyle } from "./style";

const Plans = () => {
    return (
        <PlansStyle>
            <div className="wrapper">
                <div className="header">
                    <Header title={"Planos e Metas"} />
                </div>

                <div className="sidebar">
                    <MenuSidebar customClass={""} />
                </div>
            </div>
        </PlansStyle>
    )
}

export default Plans;