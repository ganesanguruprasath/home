import { Button, Container, Form, Nav, Navbar, NavDropdown, Image,Row,Col } from 'react-bootstrap';
import { TiUser } from "react-icons/ti";
import Logos from '../../assets/2.png';

function Navbars() {
    return (
        <Navbar expand="lg" className="sticky-top bg-black border-bottom border-body">
            <Container fluid className='d-lg-none d-block'>
                <Navbar.Brand href="#">
                    {/* Correct way to reference assets in public folder */}
                    {/* <Image src="/assets/logo.png" alt="Logo" /> */}
                    <Image className="img-fluid" style={{ width: '90px' }} src={Logos} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='ms-auto'>
                    <Nav className="my-2 my-lg-0 text-light" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1" className='custom-font text-white'>Cafe</Nav.Link>
                        <Nav.Link href="#action2" className='custom-font text-white'>Store</Nav.Link>
                        <Nav.Link href="#action2" className='custom-font text-white'>About</Nav.Link>
                        <Nav.Link href="#action2" className='d-md-none d-block custom-font text-white'>Profile</Nav.Link>
                        <Nav.Link href="#action2" className='d-md-none d-block custom-font text-white'>Settings</Nav.Link>
                        <NavDropdown className='d-none d-md-block custom-font text-white bg-light rounded ms-lg-2' title={<TiUser />} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Settings
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Home
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
         
        </Navbar>
    );
}

export default Navbars;
