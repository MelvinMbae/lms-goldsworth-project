import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import EmailSender from './EmailSender';
import './styles/About.css';
import './styles/App.css';
import './styles/Chat.css';
import './styles/Courses.css';
import './styles/CreateEvent.css';
import './styles/Dashboard.css';
import './styles/EmailSender.css';
import './styles/Forms.css';
import './styles/NavBar.css';
import './styles/Profile.css';
import './styles/Reportcard.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
      <BrowserRouter>
        <EmailSender />
      </BrowserRouter>
    </React.StrictMode>


);
