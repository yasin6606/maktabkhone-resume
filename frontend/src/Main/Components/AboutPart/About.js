import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import db from './../../Database/information.json';

class About extends Component {
    render() {
        return (
            <>
                <Container className="my-5 py-5" style={{ color: this.props.textClassName }}>
                    <Row>
                        <Col className="my-5 py-3">
                            <Row>
                                <Col>
                                    <h1>About Me : </h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{db.description}</p>
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