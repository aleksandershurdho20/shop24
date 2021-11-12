import React, { useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config";
import PrivateRoutes from 'routes/privateRoutesConfig'
import Dashboard from 'components/DashboardLayout/DAshboard'
export default function Routes() {
    const showSidebarAfterLogin = PrivateRoutes.every(route => route.path === window.location.pathname)

    return (
        <Router>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        path={route.path}
                        exact
                        component={route.component}
                        key={index}
                    />
                ))}
            </Switch>
            {showSidebarAfterLogin && <Dashboard />}
        </Router>
    );
}