import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter,CiTrophy } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FcNews,FcDatabase,FcViewDetails ,FcAddDatabase,FcVideoCall,FcSurvey,FcFolder} from "react-icons/fc";
import "../src/Css/Drugtable.css";

const Footer = () => {
    return (
        <Container style={{ paddingTop: "20px",  color: "white" ,with:"100%",height:"450px"}} fluid>
            <Row style={{backgroundColor: "#091734",height:"300px",paddingTop:"30px",}}>
                <Col md={3}>
          
                    <Image
                        src="https://hidoc-files.sgp1.digitaloceanspaces.com/hidoc-client-files/1703756420122.jpg"
                        fluid
                        style={{ maxWidth: '100%', height: 'auto' ,}}
                    />
                    <p>Fastest Growing Medical Platform for Doctors.</p>

                
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <BsFacebook size={30} />
                        <IoLogoInstagram size={30} />
                        <CiTwitter size={30} />
                        <FaLinkedin size={30} />
                    </div>
                </Col>
                <Col md={3}>
                <div>
                        <h3>REACH US</h3>
                        <p>Please contact us for any other information:</p>
                        <div style={{ display: 'flex', flexDirection: 'row', }}>
                            <p style={{ marginBottom: '0px' }}><strong><a href="">Email:</a></strong> global@hidocdr.com</p>
                            <p style={{ marginBottom: '0' }}><strong><a href="">Phone Number:</a></strong> +1(415)463-3094</p>
                        </div>
                        <p><a href="">Address:</a> Hidoc Dr. Inc. | Delaware C Corp | 1309 Coffeen Ave. Suite 1200, Sheridan WY, 82801</p>
                    </div>
                </Col>
                <Col md={6}>
                    <h4>HIDOC DR. FEATURES</h4>
                    <div className="icon-grid">
                   
                        <div className="icon-row">
                            <div className="icon-item">
                                <FcNews size={80} />
                                <p>Drug Database</p>
                            </div>
                            <div className="icon-item">
                                <FcAddDatabase size={80} />
                                <p>Drug Details</p>
                            </div>
                            <div className="icon-item">
                                <CiTrophy size={80} />
                                <p>Quizzes</p>
                            </div>
                            <div className="icon-item">
                                <FcDatabase size={80} />
                                <p>Articles</p>
                            </div>
                        </div>
                  
                        <div className="icon-row">
                            <div className="icon-item">
                                <FcViewDetails size={80} />
                                <p>Drug Details</p>
                            </div>
                            <div className="icon-item">
                                <FcVideoCall size={80} />
                                <p>Webinars</p>
                            </div>
                            <div className="icon-item">
                                <FcSurvey size={80} />
                                <p>Surveys</p>
                            </div>
                            <div className="icon-item">
                                <FcFolder size={80} />
                                <p>Drug Database</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

       
            <Row className="mt-4">
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <p style={{ textAlign: 'center', backgroundColor:"#cfd8dc",color: "#000" }}>
                            &copy; Copyright 2024 Hidoc Dr. Inc.
                        </p>
                        <div style={{backgroundColor:"#cfd8dc",color: "#000",display:"flex"}}>
                        Terms & Conditions | Privacy Policy |  About Hidoc Dr
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
