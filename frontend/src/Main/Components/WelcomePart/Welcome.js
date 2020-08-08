import React, { Component } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaStackOverflow, FaLinkedin, FaInstagram } from 'react-icons/fa';
import db from './../../Database/information.json';

class Welcome extends Component {

    state = {
        summarySkills: [],
    };

    // get skills from database
    showSummarySkills = () => {

        // only show six of first skills in the array. because this is summary
        const arr = db.skills.filter(item => item.id < 6).map(item => <span key={item.id} className="px-1 font-italic">{item.name} !</span>);

        this.setState({ summarySkills: arr });
    };

    componentDidMount = () => {
        // show a summary of skills
        this.showSummarySkills();
    };

    render = () => {
        return (
            <>
                <Container style={{ marginTop: "16%", color: this.props.textClassName }}>
                    <Row>
                        <Col className="text-center">
                            <Row className="py-4">
                                <Col>
                                    <h1>Hello, I`m {db.firstName} {db.lastName}</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {this.state.summarySkills}
                                </Col>
                            </Row>
                            <Row className="py-3">
                                <Col className="d-flex justify-content-center">
                                    <Row className="col-6">
                                        <Col className="p-0">
                                            <NavLink href="https://github.com/yasin6606" className="w3-text-black">
                                                <FaGithub size="30" />
                                            </NavLink>
                                        </Col>
                                        <Col className="p-0">
                                            <NavLink href="https://www.twitter.com/kyanoosh1" className="w3-text-blue">
                                                <FaTwitter size="30" />
                                            </NavLink>
                                        </Col>
                                        <Col className="p-0">
                                            <NavLink href="https://stackoverflow.com/users/13226548/kyanoosh-goorkani" className="w3-text-orange">
                                                <FaStackOverflow size="30" />
                                            </NavLink>
                                        </Col>
                                        <Col className="p-0">
                                            <NavLink href="https://www.linkedin.com/in/yassin-gourkani-38255a1a9" className="w3-text-light-blue">
                                                <FaLinkedin size="30" />
                                            </NavLink>
                                        </Col>
                                        <Col className="p-0">
                                            <NavLink href="https://www.instagram.com/yasin_gkn" className="w3-text-red">
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