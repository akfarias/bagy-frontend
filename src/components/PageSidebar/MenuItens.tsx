import overview from '../../assets/images/overview.png';
import overviewActive from '../../assets/images/overviewActive.png';
import stores from '../../assets/images/stores.png';
import storesActive from '../../assets/images/storesActive.png';
import sales from '../../assets/images/sales.png';
import salesActive from '../../assets/images/salesActive.png';
import clients from '../../assets/images/clients.png';
import clientsActive from '../../assets/images/clientsActive.png';
import products from '../../assets/images/products.png';
import productsActive from '../../assets/images/productsActive.png';
import plans from '../../assets/images/plans.png';
import plansActive from '../../assets/images/plansActive.png';
import settings from '../../assets/images/settings.png';
import settingsActive from '../../assets/images/settingsActive.png';
import logout from '../../assets/images/logout.png';
import logoutActive from '../../assets/images/logoutActive.png';
import { IMenuLinkProps } from '../../interfaces/GeneralInterfaces';
import MenuLink from './MenuLink';

export const MenuItens = () => {
    const principal = [
        {
            route: '/home',
            name: 'Visão Geral',
            icon: <img src={overview} alt="visão geral" />,
            activeIcon: <img src={overviewActive} alt="visão geral ativada" />
        },
        {
            route: '/stores',
            name: 'Lojas',
            icon: <img src={stores} alt="lojas" />,
            activeIcon: <img src={storesActive} alt="lojas ativada" />
        },
        {
            route: '/sales',
            name: 'Vendas',
            icon: <img src={sales} alt="vendas" />,
            activeIcon: <img src={salesActive} alt="vendas ativada" />
        },
        {
            route: '/clients',
            name: 'Clientes',
            icon: <img src={clients} alt="clientes" />,
            activeIcon: <img src={clientsActive} alt="clientes ativado" />
        },
        {
            route: '/products',
            name: 'Produtos',
            icon: <img src={products} alt="produtos" />,
            activeIcon: <img src={productsActive} alt="produtos ativado" />
        },
        {
            route: '/plans',
            name: 'Planos e Metas',
            icon: <img src={plans} alt="planos e metas" />,
            activeIcon: <img src={plansActive} alt="planos e metas ativado" />
        }
    ];

    const menuLinksProfile = [
        {
            route: '/settings',
            name: 'Configurações',
            icon: <img src={settings} alt="configurações" />,
            activeIcon: <img src={settingsActive} alt="configurações ativado" />
        },
        {
            route: '/logout',
            name: 'Sair',
            icon: <img src={logout} alt="sair" />,
            activeIcon: <img src={logoutActive} alt="sair ativado" />
        }
    ];
}
export default MenuItens