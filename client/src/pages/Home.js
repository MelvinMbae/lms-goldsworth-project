import React from 'react'

function Home({ courses}) {

  return (
    <div className='home-container'>
      <div className='home-info'>
        <p className='home-text'>
          <h1>Welcome to Goldworth.
            <br/>
            Your Education is our Responsibility.</h1>
          <h3>
            In this age of digital revolution, coding isn’t just a skill—it’s a superpower!
            <br/>
            And if you’re an aspiring coder or an educator seeking to empower tech wizards, then you’re at the right place.</h3>
        </p>
        <img id='image-1' src='/images/home-1.jpeg' alt='man studying' />
      </div>
      <div className='banner'>
          <p className='banner-text'>
            <q>A programming language is for thinking about programs, not for expressing programs you’ve already thought of. 
            It should be a pencil, not a pen
            </q>
            <br/><br/>Paul Graham.</p>
      </div>
      <div className='course-cards'>
        {courses.slice(1,5).map((course)=>(<div key={course.id} className='course-card'>
          <h3 id='course-header'>{course.course_name} </h3>
          <p>{course.description}</p>
          </div>
          ))}
      </div>
      <div className='home-info'>
      <img  id='image-2' src='/images/home-2.jpeg' alt='teacher' />
        <p className='home-text content'>
          <h1>Education Confidence</h1>
          <p>Our teaching methods are child-driven, skill-based, and are focused on the overall development of each child. <br />We provide a safe, healthy, and encouraging learning environment that prepares our children for the global demands of tomorrow.</p>
          <ol>
            <li>Detailed Curriculum</li>
            <li>Quality Trainers</li>
            <li>Personalized attention</li>
          </ol>
        </p>
      </div>
      <div className='home-info content-1'>
        <p className='home-text'>
          <h1>Achieve Academic Sucess</h1>
          <p>Exceptional value with an easy-to-use platform.</p>
          <ol>
            <li>Easy to download courses</li>
            <li>Helpdesk support 24/7</li>
            <li>Personalized calenders</li>
          </ol>
        </p>
        <img  id='image-3' src='/images/home-3.jpeg' alt='woman with laptop' />
      </div>
      <div className='home-info'>
      <img  id='image-4' src='/images/home-4.jpeg' alt='students' />
        <p className='home-text'>
          <h1>Unify, Manage, Excel</h1>
          <p>Enhance your collaboration between parents, teachers and students.</p>
          <ol>
            <li>Peer to peer discussion</li>
            <li>Swift communication with trainers</li>
            <li>Personalized attention to each student</li>
          </ol>
        </p>
      </div>
    </div>
  )
}

export default Home;
