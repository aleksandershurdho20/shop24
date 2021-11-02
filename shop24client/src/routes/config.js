import Home from 'containers/Home'
import Categories from 'containers/Categories'
export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/categories",
        component: Categories
    }
]