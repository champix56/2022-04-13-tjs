import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import {Navbar as NavBar,Container, Nav} from 'react-bootstrap'
import {LinkContainer } from 'react-router-bootstrap'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
const Navbar = (props) => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <NavBar bg="primary" variant="dark">
        <Container>
          <LinkContainer to="/"><NavBar.Brand>Meme.js</NavBar.Brand></LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to="/thumbnail"><Nav.Link >Thumbnail</Nav.Link></LinkContainer>
            <LinkContainer to="/editor"><Nav.Link >New</Nav.Link></LinkContainer>
            <LinkContainer to="/editor/0"><Nav.Link >Edit id:0</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
