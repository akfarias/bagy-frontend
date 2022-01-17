import { Link } from 'react-router-dom';
import { IMenuLinkProps } from '../../../interfaces/GeneralInterfaces';
import { MenuLinkStyle } from './style';

const MenuLink: React.FC<IMenuLinkProps> = ({
    route,
    name,
    currentRoute,
    activeIcon,
    icon
}) => {
    return (
        <MenuLinkStyle>
            <Link to={route} >
                <div className="nav-item">
                    <div className="icon">{currentRoute ? activeIcon : icon}<span className="menu-link">{name}</span></div>
                </div>
            </Link>
        </MenuLinkStyle>
    );
}

export default MenuLink;