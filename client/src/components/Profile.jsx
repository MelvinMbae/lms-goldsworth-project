
function Profile({ user , session }) {

  console.log(user)
  return (
      <div className="nav-pane">
        <div className='profile-details'>
            <h2>Profile</h2>
            <div className="profile-info">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.picmonkey.com%2Fblog%2Fcreate-the-best-profile-pic&psig=AOvVaw0kO6OWHw-00IWS1QHI_z2y&ust=1707239314310000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj3tJrYlIQDFQAAAAAdAAAAABAD" alt='user'/>
                <span><h3 className="info-title"></h3><h4>{session.user_type === 'student' ? `STU_${user.student_id}` : `TR_${user.teacher_id}`}</h4></span>
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
