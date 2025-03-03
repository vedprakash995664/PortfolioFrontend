import React from "react";
import '../Css/Technologies.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Technologies() {
    return (
        <Container>
            <center><h1 className="headabout">My Skills</h1> <hr style={{ borderWidth: "3px", color: "#B415FF" }} /></center>
            <Row>
                <Col sm={1}></Col>
                <Col className="technology">
                    <div className="Technologylogos">
                        <img src="image.png" className="img-fluid" alt="" />
                        
                    </div>
                    <div className="Technologylogos">
                        <img src="express.png" className="img-fluid" alt="" />
                        
                    </div>
                    <div className="Technologylogos">
                        <img src="react.png" className="img-fluid" alt="" />
                    </div>
                    <div className="Technologylogos">
                        <img src="nodejs.svg" className="img-fluid" alt="" />
                        
                    </div>
                    <div className="Technologylogos">
                        <img src="php.png" className="img-fluid" alt="" />
                        
                    </div>
                    <div className="Technologylogos">
                        <img src="mysql.png" className="img-fluid" alt="" style={{borderRadius:"50%"}}/>
                        
                    </div>
                    <div className="Technologylogos">
                        <img src="laravell.jpg" className="img-fluid" alt="" />
                        
                    </div>
                    <div className="Technologylogos">
                        <img src="c.png" className="img-fluid" alt="" />
                        
                    </div>
                    <div className="Technologylogos">
                        <img src="reactNative.jpg" className="img-fluid" alt="" />
                    </div>

                    <div className="Technologylogos">
                        <img src="reactNative.jpg" className="img-fluid" alt="" />
                    </div>

                    <div className="Technologylogos">
                        <img src="reactNative.jpg" className="img-fluid" alt="" />
                    </div>

                    <div className="Technologylogos">
                        <img src="reactNative.jpg" className="img-fluid" alt="" />
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <br /><br />
        </Container>
    )
}
export default Technologies;   