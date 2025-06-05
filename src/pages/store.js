import { Button, Container, Row, Col, Carousel, Image, Form } from 'react-bootstrap';
import { IoBagCheckOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { PiPackageLight } from "react-icons/pi";
import Hero from '../assets/hero-1.jpg';
import AboutVdeo from '../assets/6769791-uhd_3840_2160_24fps.mp4';
import Products from '../component/product/Product';

export default function Store() {
    let herodata = [
        // {
        //     subhead: 'Freshly brewed, always delivered with love!',
        //     head: 'Enjoy your favorite coffee, espresso, and pastries from the comfort of your home.',
        //     iconText: { icon: <PiPackageLight />, text: 'Handcrafted with Care' }
        // },
        {
            subhead: 'Brewed to Perfection, Delivered to You!',
            head: 'House of Coffee, indulge in the delightful experience.',
            iconText: { icon: <PiPackageLight className='me-2' />, text: 'Handcrafted with Care' }
        },
        {
            subhead: 'Seasonal treats, pastries and etc..',
            head: 'Delicacies that are made with love :)',
            iconText: { icon: <BsTruck className='me-2' />, text: 'No Shipping Charges' }
        }
    ];
    return (
        <>
            {/* <Container> */}
                <section className='store-hero'>
                    <Row className=''>
                        <Col lg={3} className='px-lg-0 bg-light'>
                            <div className='p-5'>
                                <h4 className='border-bottom border-danger'>Welcome to our Store!</h4>
                                <h2>One-stop Shop To Purchase All our Products. At the Comfort of your fingertips!</h2>
                            </div>
                        </Col>
                        <Col lg={9} className='d-lg-flex d-none store-hero-content d-md-flex px-lg-5 flex-column justify-content-center align-items-center'>
                            <div className='bg-light bg-opacity-75 rounded w-100 p-4'>
                                <div className='w-100'>
                                    <Carousel className='w-100 fs-6'>
                                        {herodata.map((item, key) => (
                                            <Carousel.Item interval={1000} key={key} className="px-lg-4 py-3">
                                                <p>"{item.subhead}"</p>
                                                <h3 className="mb-3 text-danger fw-bolder">{item.head}</h3>
                                                <span>{item.iconText.icon} {item.iconText.text}</span>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                                {/* <div className='w-100 px-4 d-flex flex-items-start'>
                                    <Button className="mt-2 fw-2 rounded-1 text-light py-2 px-4" variant="dark">
                                        Shop below
                                    </Button>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className='products py-5'>
                    <Products />
                </section>
            {/* </Container> */}
        </>
    )
};
