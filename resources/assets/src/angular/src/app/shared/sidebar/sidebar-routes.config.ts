import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/', title: 'Accueil', icon: 'ft-home', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: []
    },
    {
        path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'nav-item has-sub', badge: '5', badgeClass: 'badge badge badge-primary badge-pill float-right mr-2', isExternalLink: false, isNavHeader: false,
        submenu: [
            { path: 'javascript:;', title: 'Second Level', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: true, isNavHeader: false, submenu: [] },
            {
                path: '', title: 'Second Level Child', icon: '', class: 'menu-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
                submenu: [
                    { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
                    { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
                ]
            },
        ]
    }
];
