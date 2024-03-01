
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
// import { CSSProperties, navItemStyle, navbarStyle,navListStyle } from 'react';


function ColorSchemesExample() {
    return (
        <>
        

            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand >CRUD Operation</Navbar.Brand>
                    <Nav className="me-auto" >
                        
                         
                            <Link to="/Home">Home</Link> 
                            <Link to="/About">About</Link> 
                             <Link to="/Users">Users</Link> 
                          
                            <Link to="/Students">Students</Link> <br />
                            
                           
                        


                    </Nav>
                </Container>
            </Navbar>
            


        </>
    );
}


export default ColorSchemesExample;