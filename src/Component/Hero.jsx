import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactTyped } from 'react-typed';

import '../Css/Hero.css'
function Hero() {
    return (
        <Container className="mt-5">
            <Row>
                <Col sm={4}>
                    <div className="imgouter">
                        <img src="Ved.png" alt="" className="img-fluid imgg" />
                    </div>
                </Col>
                <Col sm={1}></Col>
                <Col sm={7} className="txtOuter">
                    <div className="txt">
                        <span className="name">Hey, I'm Ved Prakash. </span>
                        <span style={{ fontSize: "30px" }}>
                            <ReactTyped
                                strings={["A Frontend Developer.", "A Full Stack Developer."]}
                                typeSpeed={100}
                                backSpeed={50}
                                backDelay={1000}
                                loop={true}
                                showCursor={true}
                                cursorChar="|"
                            /></span><br />
                        <span className="txtt">I am a Full Stack developer. Currently I am working at DigiCoders Technologies Pvt. Ltd. Lucknow as Web Developer .</span><br /><br />
                        <button>My Resume</button>
                    </div>

                </Col>

            </Row>
        </Container>
    )
}
export default Hero;   