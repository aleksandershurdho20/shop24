import Home from 'containers/Home'
import Products from 'containers/Products'
import SingleProduct from 'containers/Products/SingleProduct'
import Login from 'containers/Auth/Login'
import SignUp from 'containers/Auth/SignUp'
import Cart from 'containers/Cart'
import NotFound from 'containers/NotFound'
import DashboardLayout from 'components/DashboardLayout/DAshboard'
export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/products/:name",
        component: Products
    },
    {
        path: "/product/:id",
        component: SingleProduct
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/signup",
        component: SignUp
    },
    {
        path: '/cart',
        component: Cart
    },


    // {
    //     path: "*",
    //     component: NotFound
    // }
]