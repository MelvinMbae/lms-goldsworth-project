import { useLocation, Outlet } from 'react-router-dom';
import Profile from '../components/Profile';
import SideBar from '../components/SideBar';
import { Fragment } from 'react';
import Courses from '../Courses';

function Dashboard() {
    
    const location = useLocation()

    function DashPage({ children }){
        return(
            <Fragment>
                <SideBar />
                {children}
            </Fragment>
        )
    }
        return(
            <Fragment>  

                {location.pathname === '/courses' ? <DashPage><Courses /></DashPage> : <DashPage>
                                                                                            <div className='uno'>
                                                                                                <Outlet />  
                                                                                            </div>
                                                                                            <Profile />
                                                                                        </DashPage>}
                {/*<div className='footer'></div> */} 
            </Fragment>
        )
    }
export default Dashboard;
