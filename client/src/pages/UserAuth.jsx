import { useLocation, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';


function UserAuth({ user }){

    const location = useLocation()
    const navigate = useNavigate()

    return(
        <Fragment>
            {user ? <Outlet /> : navigate("/login", {state : {from : location} , replace : true})}
        </Fragment>
    )
}

export default UserAuth;