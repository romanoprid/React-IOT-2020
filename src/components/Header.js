import React, {Component} from "react";
import {Button, Form, FormControl, Container, Navbar, Nav} from "react-bootstrap";
import logo from "../images/Logo.png"

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import "../styles/header.css"

import Home from "../pages/Home";
import About from "../pages/About";
import Catalog from "../pages/Catalog";
import Hockeypucks from "../pages/Hockeypucks";


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md"  variant="dark" className="navbar">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo}
                                 className="Image"
                                 alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/hockeypucks"> Hockeypucks </Nav.Link>
                                <Nav.Link href="/about"> About us </Nav.Link>
                                <Nav.Link href="/catalog"> Catalog </Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="search"
                                    className="mr-sm-2"
                                />
                                <Button variant="primary">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/hockeypucks" component={Hockeypucks}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/catalog" component={Catalog}/>
                    </Switch>
                </Router>

            </>
        )

    }
}