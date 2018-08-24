import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/pages/index', title: 'Accueil', icon: 'ft-home', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: []
    },
    {
        path: '/pages/departements', title: 'Gestion Départements', icon: 'fa fa-building', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: []
    },
    {
        path: '', title: 'Configurations', icon: 'ft-settings', class: 'nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
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
    },
];
