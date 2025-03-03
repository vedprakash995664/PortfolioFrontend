import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import '../Css/Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);  // All projects
    const [visibleProjects, setVisibleProjects] = useState([]);  // Initially visible projects
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ image: '', title: '', description: '', video: '', link: '' }); 

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('projects.json'); // Fetching the projects data from JSON (or API)
                setProjects(response.data); // Set the projects data to state
                setVisibleProjects(response.data.slice(0, 3)); // Show only the first 3 projects initially
            } catch (error) {
                console.error("There was an error fetching the projects!", error);
            }
        };
        fetchProjects(); // Call the function when the component mounts
    }, []);

    // Handle image click to open modal with video and dynamic content
    const handleImageClick = (project) => {
        setModalContent({
            image: project.image, 
            title: project.title, 
            description: project.description,
            video: project.video, // Assuming the project data has a video link
            link: project.link // Assuming project data has a link field
        });
        setShowModal(true); 
    };

    // Handle modal close
    const handleCloseModal = () => {
        setShowModal(false);
        setModalContent({ image: '', title: '', description: '', video: '', link: '' }); 
    };

    // Handle "More" button click to show all projects
    const handleShowMore = () => {
        setVisibleProjects(projects); // Show all the projects
    };

    // Handle "Less" button click to show only the first 3 projects
    const handleShowLess = () => {
        setVisibleProjects(projects.slice(0, 3)); // Show only the first 3 projects
    };

    return (
        <>
            <Container><br /><br />
                <center><h1 className="headprojects">Latest Projects</h1> <hr style={{ borderWidth: "3px", color: "#B415FF" }} /></center>

                <Row>
                    {visibleProjects.map((project, index) => (
                        <Col key={project.id} sm={4}> {/* Change sm={4} based on how many columns you want */}
                            <center>
                                <div className="div1project" id={`div${index + 1}project`}>
                                    <img
                                        src={project.image} // Image URL fetched from API
                                        alt={project.title}
                                        className="img-fluid m"
                                        onClick={() => handleImageClick(project)} // Pass the entire project to handleImageClick
                                    />
                                </div>
                            </center>
                        </Col>
                    ))}
                </Row>

                <br />
                {/* Show "More" button only if there are more projects */}
                {visibleProjects.length < projects.length && (
                    <Row>
                        <center>
                            <button className="projectbtn" onClick={handleShowMore}>More</button>
                        </center>
                    </Row>
                )}

                {/* Show "Less" button only if more than 3 projects are visible */}
                {visibleProjects.length > 3 && (
                    <Row>
                        <center>
                            <button className="projectbtn" onClick={handleShowLess}>Less</button>
                        </center>
                    </Row>
                )}
            </Container>

            
            <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
    <Modal.Title 
        style={{ 
            color: "black", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            padding:"0px 30px" ,
            width: '100%' // Ensures the space is distributed properly across the full width
        }}
    >
        <span>{modalContent.title}</span> {/* Title */}
        {/* If a link exists, display it */}
        {modalContent.link && (
            <a 
                href={modalContent.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ fontSize: '16px', color: '#007bff' }}
            >
                Visit Project
            </a>
        )}
    </Modal.Title>
</Modal.Header>

                <Modal.Body>
                    {modalContent.video ? (
                        <div className="video-container">
                            <iframe
                                width="100%"
                                height="200"
                                src={modalContent.video}
                                title="Project Video"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : (
                        <img
                            src={modalContent.image}
                            alt={modalContent.title}
                            className="img-fluid"
                        />
                    )}
                   <div className="descriptionProject">{modalContent.description}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Projects;
