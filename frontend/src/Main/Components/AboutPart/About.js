import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import db from './../../Database/information.json';

class About extends Component {
    render() {
        return (
            <>
                <Container className="text-white my-5 py-5">
                    <Row>
                        <Col className="my-5 py-3">
                            <Row>
                                <Col>
                                    <h1>About Me : </h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>My name is {db.firstName} {db.lastName} and i`m {db.age}</p>
                                    <p>I`m from {db.location} and I`m working on programming About Web</p>
                                    <p>I`m trying to learn more about web programming and all the thing about programming. Also i`m studying about Data Science.</p>
                                    <p>For learning Data Science i should to learn Data Mining, Machine Learning, Python and etc</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
};

export default About;