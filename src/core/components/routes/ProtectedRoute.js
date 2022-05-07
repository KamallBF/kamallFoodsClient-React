import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../../api/auth";
import LoginPage from "../../../views/Login/LoginPage";

const ProtectedRoute = (props) => {
    const { redirectPath, component, preventConnected, ...routeProps} = props;
    const Component = component;
    const {user} = useAuth();
    const isAccessible = Boolean(user != null);

    return (
        <>
            {
                preventConnected ?
                    <Route
                        {...routeProps}
                        render={props => {
                            if (user)
                                return <Redirect to="/" />
                            else
                                return <Component {...props} />
                        }}
                    /> :
                    <Route
                        {...routeProps}
                        render={props => {
                            if (isAccessible) return <Component {...props} />;
                            return <Redirect to={{ pathname: redirectPath || "/login" }} />;
                        }}
                    />
            }
        </>
    );
};

ProtectedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    redirectPath: PropTypes.string,
    preventConnected: PropTypes.bool,
    component: PropTypes.oneOfType([
        PropTypes.shape({ render: PropTypes.func.isRequired }),
        PropTypes.func
    ]),
};

export default ProtectedRoute;
