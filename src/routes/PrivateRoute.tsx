import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { account } = React.useContext(UserContext);
    // console.log(account)
    let isAuthenticated: boolean = false;
    // if (Object.keys(account).length !== 0) {
        isAuthenticated = true
    // }
    return isAuthenticated ? children : <Navigate to="/" />;
};
export default PrivateRoute;