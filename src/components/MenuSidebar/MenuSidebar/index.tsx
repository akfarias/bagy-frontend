import logo from '../../../assets/images/logo.png';
import overview from '../../../assets/images/overview.png';
import overviewActive from '../../../assets/images/overviewActive.png';
import stores from '../../../assets/images/stores.png';
import storesActive from '../../../assets/images/storesActive.png';
import sales from '../../../assets/images/sales.png';
import salesActive from '../../../assets/images/salesActive.png';
import clients from '../../../assets/images/clients.png';
import clientsActive from '../../../assets/images/clientsActive.png';
import products from '../../../assets/images/products.png';
import productsActive from '../../../assets/images/productsActive.png';
import plans from '../../../assets/images/plans.png';
import plansActive from '../../../assets/images/plansActive.png';
import settings from '../../../assets/images/settings.png';
import settingsActive from '../../../assets/images/settingsActive.png';
import logout from '../../../assets/images/logout.png';
import logoutActive from '../../../assets/images/logoutActive.png';
import { IMenuLinkProps } from '../../../interfaces/GeneralInterfaces';
import MenuLink from '../MenuLink';
import { MenuSidebarStyle } from './style';
import { useLocation } from 'react-router-dom';

interface menuProps {
    customClass: string;
}

const MenuSidebar = ({ customClass }: menuProps) => {

    const location = useLocation();

    const menuLinks = [
        {
            route: '/',
            name: 'Visão Geral',
            icon: <img src={overview} alt="visão geral" />,
            activeIcon: <img src={overviewActive} alt="visão geral ativada" />
        },
        {
            route: '/lojas',
            name: 'Lojas',
            icon: <img src={stores} alt="lojas" />,
            activeIcon: <img src={storesActive} alt="lojas ativada" />
        },
        {
            route: '/vendas',
            name: 'Vendas',
            icon: <img src={sales} alt="vendas" />,
            activeIcon: <img src={salesActive} alt="vendas ativada" />
        },
        {
            route: '/clientes',
            name: 'Clientes',
            icon: <img src={clients} alt="clientes" />,
            activeIcon: <img src={clientsActive} alt="clientes ativado" />
        },
        {
            route: '/produtos',
            name: 'Produtos',
            icon: <img src={products} alt="produtos" />,
            activeIcon: <img src={productsActive} alt="produtos ativado" />
        },
        {
            route: '/planos',
            name: 'Planos e Metas',
            icon: <img src={plans} alt="planos e metas" />,
            activeIcon: <img src={plansActive} alt="planos e metas ativado" />
        },
        {
            route: '/configuracoes',
            name: 'Configurações',
            icon: <img src={settings} alt="configurações" />,
            activeIcon: <img src={settingsActive} alt="configurações ativado" />
        },
        {
            route: '/sair',
            name: 'Sair',
            icon: <img src={logout} alt="sair" />,
            activeIcon: <img src={logoutActive} alt="sair ativado" />
        }
    ]

    const renderMenuLink = (menuLink: IMenuLinkProps) => {
        return (
            <MenuLink
                icon={menuLink.icon}
                activeIcon={menuLink.activeIcon}
                name={menuLink.name}
                route={menuLink.route}
                currentRoute={location.pathname === menuLink.route}
            />
        )
    }

    return (
        <MenuSidebarStyle>
            <div id="menu-sidebar" className={customClass}>
                <div className="bagy">
                    <img src={logo} className="bagyLogo" alt="bagy" />
                    <span className="bagyTitle">Dashboard Bagy</span>
                </div>
                <nav className="menuNav">
                    {menuLinks && menuLinks.map((item: IMenuLinkProps) => {
                        console.log(item)
                        return renderMenuLink(item)

                    })}
                </nav>
            </div>
        </MenuSidebarStyle>
    );
}

export default MenuSidebar