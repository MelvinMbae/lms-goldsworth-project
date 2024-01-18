import { Outlet } from 'react-router-dom';
import './App.css'
import Profile from './Profile';
import SideBar from './SideBar';

function Dashboard({ user }) {
    
        return(
            <>  
                <SideBar />
                    <div className='uno'>
                        <Outlet />
                        <div className='footer'>
                        </div>    
                    </div>
                <Profile user={user}/>
            </>
        )
    }
export default Dashboard;
