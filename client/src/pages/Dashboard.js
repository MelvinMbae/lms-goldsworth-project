import { useLocation, Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import { appContext } from '../utils/appContext';
import Profile from '../components/Profile';
import SideBar from '../components/SideBar';
import { Fragment } from 'react';
import CoursesPage from '../CoursesPage';

function Dashboard() {
    
    const location = useLocation()
    const { user } = useContext(appContext)

    function DashPage({ children }){
        return(
            <Fragment>
                <SideBar user={user.user_details}/>
                {children}
            </Fragment>
        )
    }
        return(
            <div className='dashboard'>  

                {location.pathname === '/courses' ? <DashPage><CoursesPage /></DashPage> : <DashPage>
                                                                                                <Outlet />  
                                                                                            <Profile user={user}/>
                                                                                        </DashPage>}
                {/*<div className='footer'></div> */} 
            </div>
        )
    }
export default Dashboard;
