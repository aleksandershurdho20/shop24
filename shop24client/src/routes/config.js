import Home from 'containers/Home'
import Products from 'containers/Products'
export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/products",
        component: Products
    }
]