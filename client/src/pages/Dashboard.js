import { useLocation, Outlet } from 'react-router-dom';
import Profile from '../components/Profile';
import SideBar from '../components/SideBar';
import { Fragment } from 'react';
import CoursesPage from '../CoursesPage';

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
            <div className='dashboard'>  

                {location.pathname === '/courses' ? <DashPage><CoursesPage /></DashPage> : <DashPage>
                                                                                                <Outlet />  
                                                                                            <Profile />
                                                                                        </DashPage>}
                {/*<div className='footer'></div> */} 
            </div>
        )
    }
export default Dashboard;
