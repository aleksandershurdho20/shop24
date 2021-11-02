import Home from 'containers/Home'
import Products from 'containers/Products'
import SingleProduct from 'containers/Products/SingleProduct'
import Login from 'containers/Auth/Login'
import SignUp from 'containers/Auth/SignUp'
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
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/signup",
        component: SignUp
    }
]