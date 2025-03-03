import React from "react";
import '../Css/About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About() {
    return (
        <Container>
            <center><h1 className="headabout">About Me</h1> <hr style={{ borderWidth: "3px", color: "#B415FF" }} /></center>
            <Row>
                <Col sm={1}></Col>
                <Col>
                    <p style={{ textAlign: "justify", }} className="pt-5">
                        Hello, My Name is Ved Prakash. I am a Mern Stack developer. I'm from Prayagraj .<br />
                        Currently I am Pursuing B-Tech In Computer Science & Engineering from Dr. Rizvi College of Engineering Karari Kaushambi.
                        Also I have Completed My Diploma in Computer Science & Engineering . <br /><br />
                        <ul className="skill">
                            <li>Problem Solver</li>
                            <li>Time Management</li>
                            <li>Team Work</li>

                        </ul>
                    </p>


                </Col>
                <Col sm={3}>
                    <div className="">
                        <img src="Ved.png" alt="" className="img-fluid " />
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    )
}
export default About;   