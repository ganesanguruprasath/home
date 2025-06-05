import { Button, Container, Form, Nav, Navbar, NavDropdown, Image, Row, Col } from 'react-bootstrap';
import { TiUser } from "react-icons/ti";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";  // For social media icons
import Logos from '../../assets/2.png';

export default function Footers() {
  return (
    <footer className="bg-dark text-white border-warning-subtle border-top">
      <Container className="py-4">
        <Row className="text-center text-md-start justify-content-between">
          <h2 className="text-uppercase mb-4">Coffee & Co.</h2>
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase">About Us</h6>
            <p className='mt-3'>We are a local café and shop offering delicious pastries and a cozy space to relax. Come visit us for a delightful experience.</p>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="text-uppercase">Contact Us</h6>
            <p className="mb-1">Email: <a href="mailto:info@example.com" className="text-white">info@example.com</a></p>
            <p className="mb-1">Phone: <a href="tel:+123456789" className="text-white">+123 456 789</a></p>
            <p className="mb-3">Address: 123 Main St, City, Country</p>

            {/* <h5 className="text-uppercase">Follow Us</h5> */}
            <div className="d-flex justify-content-left">
              <a href="https://www.facebook.com" target="_blank" className="text-white me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" className="text-white me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" className="text-white me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" className="text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Legal Section */}
      <Container className="py-4 pb-2 text-center">
        <Row>
          <Col>
            <p className="mb-0">&copy; 2025 Coffee & Co. All Rights Reserved. <a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a> <a href="/terms-of-service" className="text-white text-decoration-none"> Terms of Services.</a> </p> 
            {/* <p>
              <a href="/privacy-policy" className="text-white">Privacy Policy</a> |
              <a href="/terms-of-service" className="text-white"> Terms of Service</a>
            </p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
