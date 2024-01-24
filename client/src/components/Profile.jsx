import React, { useContext, useState } from 'react';
import { userContext } from '../utils/UserContext';

function Profile() {

  const user = useContext(userContext)

  // console.log(user)
  return (
      <div className="nav-pane">
        <div className='profile-details'><h2>Calendar</h2></div>
        <div className='profile-details'>
            <h2>Profile</h2>
            <div>
                <img src={user.image_url}/>
                <p>StudentID: STU_{user.student_id}</p>
                <p>{user.email}</p>
            </div>
        </div>
      </div>
  );
};

export default Profile;
