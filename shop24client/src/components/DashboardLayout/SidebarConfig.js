import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
    {
        title: 'dashboard',
        path: '/app',
    },
    {
        title: 'user',
        path: '/dashboard/user',
    },
    {
        title: 'product',
        path: '/dashboard/products',
    },
    {
        title: 'blog',
        path: '/dashboard/blog',
    },
    {
        title: 'login',
        path: '/login',
    },
    {
        title: 'register',
        path: '/register',
    },
    {
        title: 'Not found',
        path: '/404',
    }
];

export default sidebarConfig;