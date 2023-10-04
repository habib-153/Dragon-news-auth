/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return (
            <div className="w-full h-full text-center my-auto">
            <span className="h-12 my-[25%] loading loading-spinner loading-lg"></span>
            </div>
        )
        
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;