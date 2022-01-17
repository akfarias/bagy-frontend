import Header from "../../components/Header";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import { SettingsStyle } from "./style";

const Settings = () => {
    return (
        <SettingsStyle>
            <div className="wrapper">
                <div className="header">
                    <Header title={"Configurações"} />
                </div>

                <div className="sidebar">
                    <MenuSidebar customClass={""} />
                </div>
            </div>
        </SettingsStyle>
    );
}

export default Settings;