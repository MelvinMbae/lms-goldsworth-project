import { useLocation, Outlet } from 'react-router-dom';
import './App.css'
import Profile from './Profile';
import SideBar from './SideBar';
import { Fragment } from 'react';
import Courses from './Courses';

function Dashboard({ user }) {
    
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
                                                                                            <Profile user={user}/>
                                                                                        </DashPage>}
                <div className='footer'></div>  
            </Fragment>
        )
    }
export default Dashboard;
