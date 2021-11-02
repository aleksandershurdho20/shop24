import Home from 'containers/Home'
import Products from 'containers/Products'
import SingleProduct from 'containers/Products/SingleProduct'
export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/products",
        component: Products
    },
    {
        path: "/product",
        component: SingleProduct
    }
]