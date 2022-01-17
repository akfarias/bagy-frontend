import { IHeader } from "../../interfaces/GeneralInterfaces";
import { HeaderStyle } from "./style";
import search from '../../assets/images/search.png'
import notification from '../../assets/images/notification.png';
import avatar from '../../assets/images/avatar.png';
import divider from '../../assets/images/divider.png'

const Header: React.FC<IHeader> = (props) => {
    return (
        <HeaderStyle>
            <header>
                <div className="actions">
                    <h1>{props.title}</h1>
                    <div className="search">
                        <img src={search} alt="pesquisa" />
                    </div>
                    <div className="notification">
                        <img src={notification} alt="notificações" />
                    </div>
                    <div className="divider">
                        <img src={divider} alt="divisor" /></div>
                    <div className="user">
                        <span className="nameProfile">Matheus Borges</span>
                    </div>
                    <div className="avatar">
                        <img src={avatar} alt="Usuário" />
                    </div>

                </div>
            </header>
        </HeaderStyle>
    );
}

export default Header;