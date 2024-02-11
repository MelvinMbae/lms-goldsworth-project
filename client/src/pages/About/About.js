import React, {useState} from 'react';
import ContactForm from '../../components/ContactForm';

const About = () => {


return (
<div>
  <div className="about-container">
    <div className="about-header">
      <h2>Why choose us?</h2>
      <div className='line'></div>
      <p>We are a leading online learning platform designed to empower individuals through education.<br/><br/>
      At GOLDWORTH, we believe in the transformative power of learning, and our mission is to make high-quality
      education accessible to everyone, <br/>anywhere in the world.
      </p>
      <p>Our platform offers a diverse range of courses spanning various subjects, from technology and business to arts and sciences. <br/>Each course is crafted by industry experts and experienced educators to provide you
      with valuable skills and <br/>knowledge that can propel your personal and professional growth.
      </p>
    </div>
      </div>
      <div className='about'>
    <div className="about-content">
      <h3 className='heading-3'>Our Mission</h3>
      <p>To democratize education by providing accessible, high-quality learning experiences that empower individuals
        to achieve their goals.</p>
    <h3 className='heading-3'>Our Vision</h3>
      <p>To be a global leader in online education, fostering a community of lifelong learners and contributing to
        positive societal impact.</p>
      </div>

      <div className='about-us-story'>
  <h3 className='ourstory-heading'>Our Story</h3>
  <p className='ourstory-paragraph'>
  At Goldworth, our story is woven with a passion for education and a commitment to empowering learners worldwide. It all began with a vision to create an innovative Learning Management System that transcends traditional boundaries, providing a dynamic and personalized educational experience. Over the years, our dedicated team of educators, technologists, and visionaries have collaborated to build a platform that seamlessly integrates cutting-edge technology with pedagogical expertise.
  </p>
  </div>
  </div>
  <div className='team-wrapper'>
    <h1>Meet Our Team</h1>
    <div className='team'>
    <div className="team-member">
    <div className="team-images">
    <img src='./images/user1.png' alt="Isaac Kivuva" /></div>
    <h4>Michael Njogu</h4>
    <p className='role'>Founder & CEO</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ex enim. Suspendisse potenti. 
    Vivamus lacinia elit vel nisi mollis sagittis. 
    Nulla eu tincidunt tortor. Morbi eu nulla malesuada, iaculis arcu quis, ultricies felis.</p>
    </div>
    <div className="team-member">
    <div className="team-images">
    <img src='./images/user1.png' alt="Isaac Kivuva" /></div>
    <h4>Cynthia Laleti</h4>
    <p className='role'>Head of Education</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ex enim. Suspendisse potenti. 
    Vivamus lacinia elit vel nisi mollis sagittis. 
    Nulla eu tincidunt tortor. Morbi eu nulla malesuada, iaculis arcu quis, ultricies felis.</p>
    </div>
    <div className="team-member">
    <div className="team-images">
    <img src='./images/user1.png' alt="Isaac Kivuva" /></div>
    <h4>Michael Njogu</h4>
    <p className='role'>UI Developer</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ex enim. Suspendisse potenti. 
    Vivamus lacinia elit vel nisi mollis sagittis. 
    Nulla eu tincidunt tortor. Morbi eu nulla malesuada, iaculis arcu quis, ultricies felis.</p>
    </div>
      <div className="team-member">
        <div className="team-images">
          <img src='./images/user1.png' alt="Isaac Kivuva" />
        </div>
        <h4>Melvin Mbae</h4>
        <p className='role'>Marketing</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ex enim. Suspendisse potenti. 
        Vivamus lacinia elit vel nisi mollis sagittis. 
        Nulla eu tincidunt tortor. Morbi eu nulla malesuada, iaculis arcu quis, ultricies felis.</p>
      </div>
    </div>
  </div>
  <div className='benefits-to-parents'>
    <div className='bubble'>
      <h3 className='heading-3'>Benefits for Parents</h3>
      <p>
      At GOLDWORTH, we understand the importance of parental involvement in a student's education journey. <br/>Here's
      how GOLDWORTH benefits parents:
      </p>
      <ul>
        <li>Monitor Your Child's Progress: Easily track your child's course progress and performance.</li>
        <li>Parental Dashboard: Access a dedicated parental dashboard for insights into your child's learning journey.</li>
        <li>Communication Hub: Stay informed with regular updates and communication from instructors and the school.</li>
        <li>Flexible Learning Plans: Tailor learning plans to fit your child's schedule and educational goals.</li>
      </ul>
    </div>
    <ContactForm />
  </div>
</div >
);
};

export default About;
