import { Button, Container, Nav, Navbar, NavDropdown, Image, Row, Col } from 'react-bootstrap';
import { BsCart4 } from "react-icons/bs";
import { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router';  // Correct import for routing
import { Link } from 'react-scroll';  // Import react-scroll's Link
import { TiUser } from "react-icons/ti";
import Logos from '../../assets/2.png';
import Cart from '../cart/Cart.js';
import { CartContext } from '../../context/cart.js'; // Import CartContext

export default function Navbars() {
  const { showModal, toggle, cartItems, getCartTotalQuantity } = useContext(CartContext); // Access cartItems from context

  return (
    <Navbar expand="lg" className="sticky-top bg-black border-bottom">

      {/* Mobile Menu (Visible on small screens) */}
      <Container fluid className="d-lg-none">
        <Nav.Link as={RouterLink} to="/home">
          <Image className="img-fluid" style={{ width: "9vw" }} src={Logos} alt="Logo" />
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* Cart Button */}
        <Button
          variant="dark"
          size="sm"
          className="d-flex justify-content-center align-items-center"
          onClick={toggle}
        >
          {/* <BsCart4 /> <span className='rounded-circle bg-warning ms-3 px-2'>{(cartItems.length>0)?cartItems.length:0}</span> */}
          <BsCart4 /> <span className={`rounded-circle bg-warning ms-3 px-2 ${(getCartTotalQuantity() > 9) ? 'py-1' : ''}`}>{getCartTotalQuantity()}</span>
        </Button>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 text-center" style={{ maxHeight: '100px' }} navbarScroll>
            <Link smooth={true} duration={500}>
              <Nav.Link as={RouterLink} to="/login" className="custom-font text-white">Cafe</Nav.Link>
            </Link>
            <Link smooth={true} duration={500}>
              <Nav.Link as={RouterLink} to="/login" className="custom-font text-white">Shop</Nav.Link>
            </Link>
            <Link smooth={true} duration={500}>
              <Nav.Link as={RouterLink} to="/login" className="custom-font text-white">Login</Nav.Link>
            </Link>
            {/* <Nav.Link href="#action2" className="custom-font text-white">Profile</Nav.Link>
            <Nav.Link href="#action2" className="custom-font text-white">Settings</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Desktop Menu */}
      <Container fluid className="d-none d-lg-block">
        <Row className="w-100">
          <Col xs={3} md={1}>
            <Nav.Link as={RouterLink} to="/home">
              <Image className="w-50 img-fluid" src={Logos} alt="Logo" />
            </Nav.Link>
          </Col>
          <Col xs={9} md={11} className="d-flex align-items-center">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="w-100 d-flex justify-content-end my-2 my-lg-0 text-light" style={{ maxHeight: '100px' }} navbarScroll>
                {/* Cart Button */}
                <Button
                  variant="dark"
                  size="sm"
                  className="me-3 d-flex justify-content-center align-items-center"
                  onClick={toggle}
                >
                  {/* <BsCart4 /> <span className='rounded-circle bg-warning ms-3 px-2'>{(cartItems.length>0)?cartItems.length:0}</span> */}
                  <BsCart4 /> <span className={`rounded-circle bg-warning ms-3 px-2 ${(getCartTotalQuantity() > 9) ? 'py-1' : ''}`}>{getCartTotalQuantity()}</span>
                </Button>

                {/* Product Links */}
                <Link to="cafe" smooth={true} duration={500}>
                  <Nav.Link className="custom-font text-white">Cafe</Nav.Link>
                </Link>
                <Link to="store" smooth={true} duration={500}>
                  <Nav.Link className="custom-font text-white">Shop</Nav.Link>
                </Link>

                {/* Profile Dropdown */}
                <Nav.Link as={RouterLink} to="/login" className="custom-font text-white d-flex align-items-center">
                  <TiUser className="me-2" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
