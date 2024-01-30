import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { Fragment } from 'react';


function UserAuth({ user }){

    const location = useLocation()

    return(
        <Fragment>
            {user ? <Outlet /> : <Navigate to="/" state={{from : location}} replace />}
        </Fragment>
    )
}

export default UserAuth;