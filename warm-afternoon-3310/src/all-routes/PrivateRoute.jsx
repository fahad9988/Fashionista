import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';


function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth0();

    if(!isAuthenticated) {
        toast.warning("Please Login First");
        return <Navigate to="/" />;
    }
    return children;
}

export default PrivateRoute;