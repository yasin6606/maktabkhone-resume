import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import db from './../../Database/information.json';
import './../../../CSS/Font-Family.css';
import './../../../CSS/Pointer-Cursor.css';

class Skills extends Component {

    state = {
        skillsCards: [],
    };

    // get data of each card about skills from database
    showSkillsCard = () => {
        const arr = db.skills.map(item =>
            <Col key={item.id} className="py-5">
                <Card className="w3-hover-shadow pointer-cursor">
                    <Card.Header className="bg-white d-flex justify-content-center">
                        <img src={item["img-path"]} alt={item.name} width="190" height="190" />
                    </Card.Header>
                    <Card.Body className="bg-white">
                        <Row>
                            <Col>
                                {
                                    Object.entries(item)
                                        .filter(i => i[0] !== "id" && i[0] !== "img-path")
                                        .map(i =>
                                            <Row key={i} className=" font-comic">
                                                <Col>
                                                    <p className="font-weight-bold">{i[0]} : </p>
                                                </Col>
                                                <Col>
                                                    <p className="font-italic">{i[1]}</p>
                                                </Col>
                                            </Row>
                                        )
                                }
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        );

        this.setState({ skillsCards: arr });
    };

    componentDidMount = () => {
        // show skill's cards
        this.showSkillsCard();
    };

    render() {
        return (
            <>
                <Container className="py-5">
                    <Row>
                        {this.state.skillsCards}
                    </Row>
                </Container>
            </>
        );
    };
};

export default Skills;