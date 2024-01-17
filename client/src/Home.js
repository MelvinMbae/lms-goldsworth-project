import React from 'react'
import Navbar from './Navbar';

function Home() {
  const courses = [
    { title: 'Machine Learning', content: 'Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior.' },
    { title: 'Web Development', content: 'Web development involves building and maintaining websites. It includes various aspects such as database management, front-end and back-end development.' },
    { title: 'Artificial Intelligence', content: 'Artificial Intelligence (AI) is the simulation of human intelligence in machines. It involves the creation of algorithms that can perform tasks that typically require human intelligence.' },
    { title: 'Game Development', content: 'Game development is the process of creating video games. It involves design, programming, testing, and production of games for various platforms.' },
  ];
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-info'>
        <p className='home-text'>
          <h1>Welcome to Goldworth.<br/>
Your Education is our Responsibility.</h1>
          <h3 className='home-text'>In this age of digital revolution, coding isn’t just a skill—it’s a superpower!<br/>
And if you’re an aspiring coder or an educator seeking to empower tech wizards, then you’re at the right place.</h3>
        </p>
        <img id='image-1' src='/images/home-1.jpeg' alt='man studying' />
      </div>
      <div className='banner'>
          <p className='banner-text'><q>A programming language is for thinking about programs, not for expressing programs you’ve already thought of. 
            It should be a pencil, not a pen</q><br/><br/>Paul Graham.</p>
        </div>
      <div className='course-cards'>
        {courses.map((course, index)=>(<div key={index} className='course-card'>
          <h3 id='course-header'>{course.title} </h3>
          <p>{course.content}</p>
          </div>
          ))}
      </div>
      <div className='content'>
      <img  id='image-2' src='/images/home-2.jpeg' alt='teacher' />
        <p className='content-text'>
          <h1>Education Confidence</h1>
          <p>Our teaching methods are child-driven, skill-based, and are focused on the overall development of each child. <br />We provide a safe, healthy, and encouraging learning environment that prepares our children for the global demands of tomorrow.</p>
          <ol>
            <li>Detailed Curriculum</li>
            <li>Quality Trainers</li>
            <li>Personalized attention</li>
          </ol>
        </p>
      </div>
      <div className='content-1'>
        <p className='content-1-text'>
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
      <div className='content-2'>
      <img  id='image-4' src='/images/home-4.jpeg' alt='students' />
        <p className='content-2-text'>
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
