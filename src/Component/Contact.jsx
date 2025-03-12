import React, { useState } from "react";
import axios from 'axios'; // Import Axios for making HTTP requests
import { toast } from 'react-toastify'; // Import Toastify for notifications
import '../Css/Contact.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer to render notifications
import { Spinner } from 'react-bootstrap'; // Import spinner component from React Bootstrap

function Contacts() {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        number:''
    });

    // Loading state to show spinner while submitting form
    const [loading, setLoading] = useState(false);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData);
        
        try {
            const response = await axios.post('https://portfoliobackend-sgvk.onrender.com/api/submit', formData);
            // Success toast
            toast.success('Your message has been sent successfully!', { position: "top-center" });
            setFormData({
                name: "",
                email: "",
                message: "",
                number:"",
            })
        } catch (error) {
            // Error toast
            toast.error('There was an error sending your message. Please try again later.', { position: "top-center" });
        } finally {
            // Hide loading spinner
            setLoading(false);
        }
    };

    return (
        <>
            <Container id="contact-section">
                <br /><br />
                <center><h1 className="headprojects">Contact Me</h1> <hr style={{ borderWidth: "3px", color: "#B415FF" }} /></center>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={5} className="contact-text">
                        <span className="lets">Let's Talk</span><br /><br />
                        <span>I'm excited to take on new projects!  Let's collaborate on something amazing.  Message me anytime with your ideas – I'm here to help bring your vision to life. No project is too big or too small. Let's create something extraordinary together!
                        </span><br /><br />
                        <span> <i class="bi bi-envelope-at-fill"></i> vedprakash995664@gmail.com</span><br /><br />
                        <span> <i class="bi bi-telephone-inbound-fill"></i> +91 63072-75065</span><br /><br />
                        <span><i class="bi bi-geo-alt-fill"></i> Prayagraj, Uttar Pradesh</span>
                        <div className="social-links">
                            <a href="https://wa.me/916307275065" target="_blank" rel="noopener noreferrer">
                                <img src="whats.jpg" alt="WhatsApp" />
                            </a>
                            <a href="https://www.linkedin.com/in/ved-prakash-93436518a/">
                                <img src="link.png" alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/vedprakash995664">
                                <img src="github.jpg" alt="GitHub" />
                            </a>

                        </div>
                    </Col>
                    <Col sm={5}>
                        <Form onSubmit={handleSubmit}><br />
                            <Form.Label htmlFor="inputName">Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="txt"
                                className="namecontact"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            /> <br />
                            <Form.Label htmlFor="inputEmail">Your Number</Form.Label>
                            <Form.Control
                                type="number"
                                id="txt"
                                className="emailcontact"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                            /> <br />
                            <Form.Label htmlFor="inputEmail">Your Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="txt"
                                className="emailcontact"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            /> <br />
                            <Form.Label htmlFor="inputMessage">Write Your Message here</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2">
                                <Form.Control
                                    as="textarea"
                                    placeholder=""
                                    style={{ height: '200px', backgroundColor: "#32323C", color: "white" }}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </FloatingLabel><br />
                            <center>
                                {/* Show loading spinner while submitting */}
                                <button type="submit" className="projectbtn" disabled={loading}>
                                    {loading ? (
                                        <Spinner animation="border" size="sm" /> // Show spinner when loading
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            </center>
                        </Form>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>


            <ToastContainer />
        </>
    );
}

export default Contacts;
