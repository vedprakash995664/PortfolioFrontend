import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactTyped } from 'react-typed';
import { Modal, Button } from 'react-bootstrap';

import '../Css/Hero.css';

function Hero() {
    const [showModal, setShowModal] = useState(false); // state to control modal visibility

    // Function to toggle modal
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    return (
        <Container className="mt-5" id="nav-section">
            <Row>
                <Col sm={4}>
                    <div className="imgouter">
                        <img src="vedprakash_digicoder.png" alt="Ved Prakash" className="img-fluid imgg" loading="lazy"/>
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
                            />
                        </span><br />
                        <span className="txtt">
                            I am a Full Stack developer. Currently, I am working at DigiCoders Technologies Pvt. Ltd. Lucknow as a Web Developer.
                        </span><br /><br />
                        <button onClick={handleModalShow}>My Resume</button>
                    </div>
                </Col>
            </Row>

            {/* Modal for Resume PDF */}
            <Modal show={showModal} onHide={handleModalClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:"black"}}>My Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <embed
                        src="VedPrakash_WebDeveloper.pdf"
                        type="application/pdf"
                        width="100%"
                        height="500px"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Hero;
