import react from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function PrivateRoute({children}) {
    const { user } = useAuth();
    return (
        user? children : <Navigate to="/login"/> 
    );
}

export default PrivateRoute;