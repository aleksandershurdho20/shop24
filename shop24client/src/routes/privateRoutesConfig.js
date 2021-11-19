import Dashboard from 'containers/Dashboard'
import CreateProduct from 'containers/Products/CreateProduct'
export default [
    {
        path: "/app",
        component: Dashboard
    },
    {
        path: "/app/products/create",
        component: CreateProduct
    },


]