import React from 'react';

const About = () => {
    return (
        <div>
            <div className='about-us-cover'>
                <div className="text">
                    About Us

                    {/* Welcome to GOLDWORTH, a leading online learning platform designed to empower individuals through education. At GOLDWORTH, we believe in the transformative power of learning, and our mission is to make high-quality education accessible to everyone, anywhere in the world. */}
                </div>
            </div>

            <div className="about-container">
                <div className="about-header">
                    <h2>About GOLDWORTH</h2>
                </div>
                <div className="about-content">
                    <p>
                        Welcome to GOLDWORTH, a leading online learning platform designed to empower individuals through education.
                        At GOLDWORTH, we believe in the transformative power of learning, and our mission is to make high-quality
                        education accessible to everyone, anywhere in the world.
                    </p>
                    <p>
                        Our platform offers a diverse range of courses spanning various subjects, from technology and business to
                        arts and sciences. Each course is crafted by industry experts and experienced educators to provide you
                        with valuable skills and knowledge that can propel your personal and professional growth.
                    </p>
                    <h3 className='heading-3'>Our Mission</h3>
                    <p>
                        To democratize education by providing accessible, high-quality learning experiences that empower individuals
                        to achieve their goals.
                    </p>
                    <h3 className='heading-3'>Our Vision</h3>
                    <p>
                        To be a global leader in online education, fostering a community of lifelong learners and contributing to
                        positive societal impact.
                    </p>
                </div>
            </div>

            <div className='about-us-story'>
                    <h3 className='ourstory-heading'>Our Story</h3>
                    <p className='ourstory-paragraph'>
                        At Goldworth, our story is woven with a passion for education and a commitment to empowering learners worldwide. It all began with a vision to create an innovative Learning Management System that transcends traditional boundaries, providing a dynamic and personalized educational experience. Over the years, our dedicated team of educators, technologists, and visionaries have collaborated to build a platform that seamlessly integrates cutting-edge technology with pedagogical expertise.
                    </p>
            </div>
            <h3 className='heading-3'>Meet Our Team</h3>
            <div className='team-images-container'>
                <div className="team-images">
                    <img src="./images/user1.png" alt="Michael Njogu" />
                    <p>Michael Njogu</p>
                    <p>Co-Founder and CEO</p>
                </div>
                <div className="team-images">
                    <img src="./images/user1.png" alt="Cynthia Laleti" />
                    <p>Cynthia Laleti</p>
                    <p>Head of Education</p>
                </div>
                <div className="team-images">
                    <img src='./images/user1.png' alt="Isaac Kivuva" />
                    <p>Isaac Kivuva</p>
                    <p>Chief Technology Officer</p>
                </div>
                <div className="team-images">
                    <img src="./images/user1.png" alt="Michael Njogu" />
                    <p>Michael Njogu</p>
                    <p>Co-Founder and CEO</p>
                </div>
                <div className="team-images">
                    <img src="./images/user1.png" alt="Cynthia Laleti" />
                    <p>Cynthia Laleti</p>
                    <p>Head of Education</p>
                </div>
        
            </div>

            {/* <div className="about-images">
                <img src="https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxlYXJuaW5nJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D" alt="Computer" />
            </div> */}

            <div className='benefits-to-parents'>
                <h3 className='heading-3'>Benefits for Parents</h3>
                <p>
                    At GOLDWORTH, we understand the importance of parental involvement in a student's education journey. Here's
                    how GOLDWORTH benefits parents:
                </p>
                <ul>
                    <li>Monitor Your Child's Progress: Easily track your child's course progress and performance.</li>
                    <li>Parental Dashboard: Access a dedicated parental dashboard for insights into your child's learning journey.</li>
                    <li>Communication Hub: Stay informed with regular updates and communication from instructors and the school.</li>
                    <li>Flexible Learning Plans: Tailor learning plans to fit your child's schedule and educational goals.</li>
                </ul>
            </div>
            <div className="about-contact">
                <h3 className='contact-heading'>Contact Us</h3>
                <p className='contact-paragraph'>
                    For any inquiries or assistance, feel free to contact our support team:
                    <br />
                    Email: support@goldworth.com
                </p>
            </div>

        </div >
    );
};

export default About;
