import React from "react";
import '../Css/About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About() {
    return (
        <Container id="about-section">
            <center><h1 className="headabout">About Me</h1> <hr style={{ borderWidth: "3px", color: "#B415FF" }} /></center>
            <Row>
                <Col sm={1}></Col>
                <Col className="vedPhoto">
                    <p style={{ textAlign: "justify", }} className="pt-5">
                    Hello! <b className="award"> I’m Ved Prakash,</b> a passionate and skilled Web Developer with a strong foundation in Computer Science and Engineering. I hold a Diploma in Computer Science and Engineering from MJP Government Polytechnic Kaushambi and I am currently pursuing  B.Tech in Computer Science from AKTU.
                    </p>
                    <p style={{ textAlign: "justify", }}>
                    My journey in the tech world began with an intense focus on web development, where I honed my skills through various training and internships. I started with a 45-day UI training at Kamadgiri Software Solutions Pvt. Ltd. Chitrakoot, where I was honored with a <b className="award">"Star Performance Award"</b>  for my dedication and skills. Following that, I completed a 2-month summer training in Core Python Programming at Tcybill Technologies Pvt. Ltd. Prayagraj, where I received the <b className="award">"Best Performance Award"</b>  for my contributions.
                    </p>
                    <p style={{ textAlign: "justify", }}>
                    I am currently working as a Web Developer at Digicoders Technologies Pvt Ltd. Lucknow, where I have gained hands-on experience in MERN Stack development. During my  job, I successfully completed over 10 frontend projects and more than 5 full-stack projects for clients, showcasing my ability to deliver high-quality, scalable solutions. <br />
                    I have also completed 6-month internships from Digicoders Technologies Pvt. Ldt. Lucknow
                    </p>
                    <p style={{ textAlign: "justify", }}>
                    I also possess a strong command of PHP and am expanding my skill set by learning React Native for mobile app development. I am passionate about creating innovative and efficient solutions and constantly strive to learn and grow in the ever-evolving tech landscape.
                    </p>
                    <ul className="skill">
                            <li>Fast Learner</li>
                            <li>Problem Solver</li>
                            <li>Time Management</li>
                            <li>Team Work</li>

                        </ul>

                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    )
}
export default About;   