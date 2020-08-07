import React, { Component } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaStackOverflow, FaLinkedin, FaInstagram } from 'react-icons/fa';

class Welcome extends Component {
    render() {
        return (
            <>
                <Container className="my-5 text-white">
                    <Row>
                        <Col className="text-center my-5">
                            <Row className="py-4">
                                <Col>
                                    <h1>Hello, I`m Yassin Gourkani</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Full Stack Dev ! React ! Node JS ! PHP ! HTML ! CSS</p>
                                </Col>
                            </Row>
                            <Row className="py-3">
                                <Col className="d-flex justify-content-center">
                                    <Row className="col-6">
                                        <Col className="p-0">
                                            <NavLink href="https://github.com/yasin6606" className="text-white">
                                                <FaGithub size="30" />
                                            </NavLink>
                                        </Col>
                                        <Col className="p-0">
                                            <NavLink href="https://www.twitter.com/kyanoosh1" className="text-white">
                                                <FaTwitter size="30" />
                                            </NavLink>
                                        </Col>
                                        <Col className="p-0">
                                            <NavLink href="https://stackoverflow.com/users/13226548/kyanoosh-goorkani" className="text-white">
                                                <FaStackOverflow size="30" />
                                            </NavLink>
                                        </Col>
                                        <Col className="p-0">
                                            <NavLink href="https://www.linkedin.com/in/yassin-gourkani-38255a1a9" className="text-white">
                                                <FaLinkedin size="30" />
                                            </NavLink>
                                        </Col>
                                        <Col className="p-0">
                                            <NavLink href="https://www.instagram.com/yasin_gkn" className="text-white">
                                                <FaInstagram size="30" />
                                            </NavLink>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
};

export default Welcome;