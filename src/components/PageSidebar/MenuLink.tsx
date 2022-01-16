import { NavLink } from 'react-router-dom';
import { IMenuLinkProps } from '../../interfaces/GeneralInterfaces';

const MenuLink: React.FC<IMenuLinkProps> = ({
    route,
    name,
    currentRoute,
    activeIcon,
    icon
}) => {
    return (
        <NavLink to={route} className="nav-item">
            <div className="icon">{currentRoute ? activeIcon : icon}</div>
            <span>{name}</span>
        </NavLink>
    )
}

export default MenuLink;