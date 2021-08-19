import React from 'react';
//import { Navbar,NavDropdown} from 'react-bootstrap';
//import { Container} from 'reactstrap';
//import { Form, Button,FormControl } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.js'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Navbar, Nav, Container } from 'react-bootstrap';



const Navigation = () => {
    return (
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">OceanNews</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#AllNews">AllNews</Nav.Link>
      <Nav.Link href="#India">India</Nav.Link>
      <Nav.Link href="#Business">Business</Nav.Link>
      <Nav.Link href="#Sports">Sports</Nav.Link>
      <Nav.Link href="#World">World</Nav.Link>
      <Nav.Link href="#Politics">Politics</Nav.Link>
      <Nav.Link href="#Technology">Technology</Nav.Link>
      <Nav.Link href="#Startup">Startup</Nav.Link>
      <Nav.Link href="#Entertainment">Entertainment</Nav.Link>
      <Nav.Link href="#Miscellaneous">Miscellaneous</Nav.Link>
      <Nav.Link href="#Hatke">Hatke</Nav.Link>
      <Nav.Link href="#Science">Science</Nav.Link>
      <Nav.Link href="#Automobile">Automobile</Nav.Link>
   
    </Nav>
    </Container>
  </Navbar>
  <br />

</>
    )
}

export default Navigation
