interface IMenuLinkProps {
    route: string;
    name: string;
    currentRoute?: boolean;
    icon: any;
    activeIcon: any;
    isVisible?: boolean;
}

interface IRoutes {
    path: string;
    name: string;
    exact: boolean;
    component: any;
}

interface IPage {
    name: string;
}

interface ILogoProps {
    customClass?: string;
}


interface IMainInformation {
    customClass?: string;
    children?: React.ReactChild;

}

interface InforCardProps {
    principalInfo: string,
    value?: string
    info?: string,
    select?: string,
    customClass?: string

}

interface IMainProps {
    title: string
}

interface IHeader {
    title: string
}

export type {
    IRoutes,
    IPage,
    ILogoProps,
    IMainInformation,
    IMenuLinkProps,
    InforCardProps,
    IMainProps,
    IHeader
}