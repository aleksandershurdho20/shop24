import Dashboard from 'containers/Dashboard'
import Orders from 'containers/Orders'
import CreateProduct from 'containers/Products/CreateProduct'
import Products from 'containers/Products/GetAllProducts'
import Support from 'containers/Support'
import Tags from 'containers/Tags'
import CreateTag from 'containers/Tags/CreateTag'
import UpdateTag from 'containers/Tags/UpdateTag'

export default [
    {
        path: "/app",
        component: Dashboard
    },
    {
        path: "/app/products/create",
        component: CreateProduct
    },
    {
        path: "/app/products",
        component: Products
    },
    {
        path: "/app/tags",
        component: Tags
    },
    {
        path: "/app/tags/create",
        component: CreateTag
    },
    {
        path: "/app/tag/edit/:id",
        component: UpdateTag
    },
    {
        path: "/app/support",
        component: Support
    },
    {
        path: "/app/orders",
        component: Orders
    }



]