import Dashboard from 'containers/Dashboard'
import CreateProduct from 'containers/Products/CreateProduct'
import Products from 'containers/Products/GetAllProducts'
import Tags from 'containers/Tags'
import CreateTag from 'containers/Tags/CreateTag'
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



]