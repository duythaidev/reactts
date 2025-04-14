import React, { useState } from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return isAuthenticated ? children : <Navigate to="/" />;
};
export default PrivateRoute;