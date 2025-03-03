import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import '../Css/Services.css'
function Services(){
    return(
        <>
        <Container>
        <center><h1 className="headservices">My Services</h1> <hr style={{borderWidth:"3px", color: "#B415FF"}} /></center>
                <Row>   
                    <Col sm={1}></Col>
                    <Col>
                       
                        <center><div className="div1">
                            <h4>01</h4>
                            <h2>Web Designing</h2>
                            <h1>100+</h1>
                            <h6>Website Designed By Me. Like Admin Panel, HMS, Cab Booking and many more.</h6>
                        </div>
                        </center>
                    </Col>
                    
                    <Col>
                       <center> <div className="div1">
                       <h4>02</h4>
                            <h2>Full Stack</h2>
                            <h1>40+</h1>
                            <h6>Project Done by Me. Like Job Portal, E-Commerce and many more.</h6>
                        </div></center>
                    </Col>
                    
                    <Col>
                       <center> <div className="div1">
                       <h4>03</h4>
                            <h2>Software Product</h2>
                           <h1>5+</h1>
                            <h6>Software Product create by me. Like CRM, Billing Software and many more.</h6>

                        </div></center>
                    </Col>
                    
                    
                    <Col sm={1}></Col>
                    
                </Row>
        </Container>
        </>
    )
}
export default Services; 