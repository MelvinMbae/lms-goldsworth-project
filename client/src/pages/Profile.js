
function Profile({ user }) {

    return (
        <div className="nav-pane">
          <div className='profile-details'>
              <h2>Profile</h2>
              <div className="profile-info">
                  <img src={user.image_url}/>
                  <p className="info-title">StudentID: </p>
                  <p>STU_{user.student_id}</p>
                  <p className="info-title">Email Adress:</p>
                  <p>{user.email}</p>
              </div>
              <div className='profile-banner'>
               <p className='banner-text'>
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
  