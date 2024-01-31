
function Profile({ user }) {

  return (
      <div className="nav-pane">
        <div className='profile-details'>
            <h2>Profile</h2>
            <div className="profile-info">
                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt='user'/>
                <p className="info-title">StudentID: </p>
                <p>STU_{user.student_id}</p>
                <p className="info-title">Email Adress:</p>
                <p>{user.email}</p>
            </div>
            <div className='profile-banner'>
             <p className='profile-banner-text'>
               <q>A programming language is for thinking about programs, not for expressing programs you’ve already thought of. 
                  It should be a pencil, not a pen
              </q>
            <br/><br/>Paul Graham.</p>
      </div>
        </div>
      </div>
  );
};

export default Profile;
