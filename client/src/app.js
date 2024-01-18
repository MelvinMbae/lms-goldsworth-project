import React from 'react';
import { BrowserRouter, Routes,Route,} from 'react-router-dom';
import CoursesPage from './components/CoursesPage';
import IntroductionPage from './components/IntroductionPage';
import './courses.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
                 
      </Routes>
    </BrowserRouter>

  )}
  export  default App;


