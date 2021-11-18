import { Icon } from '@iconify/react';
import DashboardIcon from '@mui/icons-material/Dashboard';

import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
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
        title: 'product',
        path: '/app/products/create',
        icon: getIcon(shoppingBagFill),


    },
    {
        title: 'blog',
        path: '/dashboard/blog',
        icon: getIcon(fileTextFill)

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