import { Icon } from '@iconify/react';
import DashboardIcon from '@mui/icons-material/Dashboard';

import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import tags from '@iconify/icons-eva/pricetags-fill';
const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
    {
        title: 'dashboard',
        path: '/app',
        icon: getIcon(pieChart2Fill)

    },
    {
        title: 'user',
        path: '/dashboard/user',
        icon: getIcon(peopleFill)

    },
    {
        title: 'products',
        path: '/app/products',
        icon: getIcon(shoppingBagFill),


    },
    {
        title: 'tags',
        path: '/app/tags',
        icon: getIcon(tags)

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