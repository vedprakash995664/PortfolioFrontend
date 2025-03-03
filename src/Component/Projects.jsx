import React from "react";
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import '../Css/Projects.css'
function Projects() {
    return (
        <>
            <Container><br /><br />
                <center><h1 className="headprojects">Latest Project</h1> <hr style={{ borderWidth: "3px", color: "#B415FF" }} /></center>
                <Row>
                    {/* <Col sm={1}></Col> */}
                    <Col>

                        <center><div className="div1project" id="div1project">
                            {/* <img src="project1.png" alt="" className="img-fluid m" /> */}
                        </div>
                        </center>
                    </Col>

                    <Col>
                        <center> <div className="div1project" id="div2project">

                        </div></center>
                    </Col>

                    <Col>
                        <center> <div className="div1project" id="div3project">

                        </div></center>
                    </Col>


                    <Col sm={1}></Col>

                </Row>
                <br />
                <Row>
                    <center><button className="projectbtn">More</button></center>
                </Row>
            </Container>
        </>
    )
}
export default Projects; 