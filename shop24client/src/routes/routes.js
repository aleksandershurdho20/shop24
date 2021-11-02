import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config";
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
            </Switch>
        </Router>
    );
}