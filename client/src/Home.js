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
        <img  id='image-1' src='https://s3-alpha-sig.figma.com/img/2af5/49b4/e6575df3893f1191eb5bb518194d41af?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fOVRdt6Mrd8sxL~r2v9Pg7Pm4~8S2TGxDVL20EqxozNi1VIrDgaVJSRMHkOdzR2bSMgaHMCYbUQ8mlYALn8yQtPlg7ibNqA4MSTremXYYYdhTyYnEK4CCmtwcpu4sOVKfOrYz6SvDcJQl8rITIEUe08f29zH86hjRjoHjpcWuUndR1jX-EpWrzNnfIueL7HCxfEvKJIDrUr6HudCe33PA0MqdVT5M4ggJjdCAAqaz39RnrrjunnbFY9Nth~VCeztmGKvg9UmWkQi6OrM4c3e7BJFv9ULVRuSQeBP8sIfHCH~2AMAh9guDaf62GtCSrczECh2HhvDBTaBRTvhd1YC-g__' alt='home image' />
      </div>
      <div className='banner'>
          <p className='banner-text'>"A programming language is for thinking about programs, not for expressing programs you’ve already thought of. It should be a pencil, not a pen"<br/><br/>Paul Graham.</p>
        </div>
      <div className='course-cards'>
        {courses.map((course, index)=>(<div key={index} className='course-card'>
          <h3 id='course-header'>{course.title}</h3>
          <p>{course.content}</p>
          </div>
          ))}
      </div>
      <div className='content'>
      <img  id='image-2' src='https://s3-alpha-sig.figma.com/img/681d/9a68/3532617efca158d62c4fc661612de175?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S4O8lmnLaPQVLUrRbhjDtgUyUCeGr0B~6CWJH5H9ngkAtGI6OvCzWrC0LusMgoxCIKYaKKnJZU55DEOYDoOQuzEjjLcy4xdJAp3oICHQtuhnwYmhLlCVNxZlpm~zVCX0mm42ialfjtjuXTRceW9mySVXvMSlO3CnwqgJoBVZF4kBu-ujo3CiDGxdNnx91PGdms2st0h0jyZ20kEVJnCC3R2II7kBQw9yP~0fC2TDiyb3lYmC~PMSF6Sv6zMnk5aw8KyV8iB4N-VsdOaVtUSP0cLvv8u9avoH86uBqNQr5AD3ErZKqU05lM~ZIk7yf5cZ0OpEzx5CeR6OssOSJQ0p1Q__' alt='home image' />
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
        <img  id='image-3' src='https://s3-alpha-sig.figma.com/img/dcf7/2af6/94ff08a5ecc143d6eec0855e3622df6f?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JL0Y0lAHw9W89-cVIPH0MDxfss96KIbKiulE5H0iB5JYqaAXp-Qi9efiwyVN~V7bMSrJp7CSOENTuz4IXMlRWP2Mu5mpJHXTMi5DTbMCQ89dZ356ah7v4jtfA-DS31xQIoUnyfruNCv5V-CzAxwL9LuRrkQbKXy8W9KGZ3CWiXHZqlwmv4pjq3BIcgb-KdKI1qjsjL-D11SMuiIXTt66uloLnvctgsDCYDQtYEhAzbbxz~fcqe9L4XL-OJxpD12e3q-TfKqX6dOrKPs6g4ReWJto39qcBSBOpv0jp8tOMWhJvhNAWgJdq5cMh2Mi7eJhto5VwWqLa~XxSu1JS24sjw__' alt='home image' />
      </div>
      <div className='content-2'>
      <img  id='image-4' src='https://s3-alpha-sig.figma.com/img/da4a/b31c/9d75eaf8c43b4b8452fb02df278e8ea9?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fk2jzMMRRTgSyM7nIO0m90Zs5xPn9N2Aq6URlLenR1husnU1X1KnYxWAMV9bbKGVQMBGkdn1azsypyVFTZpU6EPq46L-RSxLQBEflumXYbRP1lQFZI14YLl~Y0jqqGvVgSdqexFp61XhuwgOAnl2yv0A9tX6Z4ejEXJZNhZTa76i-UXyh0UW5pkDV4fOC303tfjRxEiI-yp5sespGPIfELzTtqPTfDP8icPlATLXx49Ij3bxgwqHMtjmHImG4u-kCraxn6kY~lhH2Q-DqOWc3KnZcZ5B7~FhQ-aF1Wh69-5u~XzPzrl6bJe-9Lm83JtFde~VUbgG6gxn8-71FL0kOw__' alt='home image' />
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
