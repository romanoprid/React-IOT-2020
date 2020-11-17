import React, {Component} from 'react';
import {Container, Tab, Row, Nav, Col} from "react-bootstrap";


export default function About(){
        return (
            <Container>
                <Tab.Container id="left_tabs" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid consec!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid consec!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="data:image/jpeg;base64,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"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid consec!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid consec!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid consec!</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
}
