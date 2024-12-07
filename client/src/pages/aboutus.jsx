import React from 'react';
import '../all.css';
import Navbar from '../components/navbar';
import deepImg from '../assets/deep_pic.JPG';
import aeshaImg from '../assets/aesha_pic.jpg';
import joyImg from '../assets/joy_pic.jpg';
import sakshamImg from '../assets/saksham_pic.jpg';
import teamlogo from '../assets/dark-team-logo.jpg';

const About = () => {
  return (
    <>
        <Navbar/>
        <div className="about-page">
            {/* Project Scope Section */}
            <section className="project-scope">
                <div className="scope-text">
                    <h1>Our Project Scope</h1>
                    <p>
                        Our project is designed to bridge the gap between innovation and accessibility, creating a dynamic platform that empowers 
                        users to explore, understand, and seamlessly integrate cutting-edge AI tools into their workflows. By simplifying the 
                        discovery process, we ensure that users can easily find AI solutions tailored to their unique needs, whether for education, 
                        business, or personal projects.
                        <br /><br />
                        At the heart of our mission is the belief in fostering a sense of community and collaboration. We aim to build an inclusive 
                        space where developers, professionals, and AI enthusiasts can connect, share insights, and work together on transformative 
                        projects. Our platform is not just about tools; it’s about empowering individuals and organizations to achieve more with the 
                        potential of artificial intelligence.
                        <br /><br />
                        Additionally, we are committed to keeping users informed about the latest advancements in AI technology. By providing intuitive 
                        interfaces and accessible resources, we strive to make AI tools understandable and usable, even for those without technical expertise. 
                        With this approach, we aim to democratize the benefits of AI, making it a driving force for innovation, learning, and progress across all 
                        sectors.
                    </p>
                </div>
                <div className="logo">
                    <img src={teamlogo} alt="Team Logo" />
                </div>
            </section>

            {/* Developers Section */}
            <section className="developers">
                <h2>Meet Our Developers</h2>
                <div className="team">
                    <div className="member">
                        <img src={deepImg} alt="Member 1" />
                        <p>Deepkumar Parejiya</p>
                    </div>
                    <div className="member">
                        <img src={aeshaImg} alt="Member 2" />
                        <p>Aeshaben Thakkar</p>
                    </div>
                    <div className="member">
                        <img src={joyImg} alt="Member 3" />
                        <p>Joy Gandhi</p>
                    </div>
                    <div className="member">
                        <img src={sakshamImg} alt="Member 4" />
                        <p>Saksham</p>
                    </div>
                </div>
            </section>

            {/* Join Our Community Section */}
            <section className="community">
                <h2>Join Our Community</h2>
                <div className="social-links">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                </div>
            </section>
        </div>
    </>
  )
}

export default About;