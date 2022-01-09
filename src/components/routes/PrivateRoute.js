import react from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoginForm from "../auth/LoginForm";
import Home from "../Home";

function PrivateRoute({children, ...rest}) {
    const {user} = useAuth();
    if(user){
        return (
            <Route to="/home" element={<Home/>}/>
        );
    }
    else{
        <Route to="/login" element={<LoginForm />}/>
    }
}

export default PrivateRoute;