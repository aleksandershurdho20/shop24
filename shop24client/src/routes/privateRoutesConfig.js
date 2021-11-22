import Dashboard from 'containers/Dashboard'
import CreateProduct from 'containers/Products/CreateProduct'
import Products from 'containers/Products/GetAllProducts'
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


]