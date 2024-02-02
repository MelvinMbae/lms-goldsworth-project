import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Profile.css'
import './styles/Forms.css'
import './styles/App.css'
import './styles/NavBar.css'
import './styles/Dashboard.css'
import './styles/Reportcard.css'; 
import './styles/Chat.css'
import './styles/Courses.css'
import './styles/About.css';
import './styles/CreateEvent.css'
import ParentComments from './ParentComment';
import { BrowserRouter } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
      <BrowserRouter>
        <ParentComments />
      </BrowserRouter>
    </React.StrictMode>


);
