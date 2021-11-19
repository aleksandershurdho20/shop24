import React, { useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch, matchPath } from "react-router-dom";
import routes from "./config";
import Dashboard from 'components/DashboardLayout/DAshboard'

export default function Routes() {

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

                <Dashboard />
            </Switch>
        </Router>
    );
}