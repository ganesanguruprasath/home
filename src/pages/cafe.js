import { Button, Container, Row, Col, Carousel, Image, Form, FloatingLabel } from 'react-bootstrap';
// import 'animate.css';
import { IoBagCheckOutline } from "react-icons/io5";
// import { motion } from "motion/react";
import { BsTruck } from "react-icons/bs";
import { PiPackageLight } from "react-icons/pi";
import { TbHeartHandshake } from "react-icons/tb";
import { TbCloverFilled } from "react-icons/tb";
import { FaStore } from "react-icons/fa6";
import Hero from '../assets/hero-1.jpg';
import Explore1 from '../assets/yanapi-senaud-6HR8vpjYUHo-unsplash.jpg';
import AboutVdeo from '../assets/11903942_2160_3646_60fps.mp4';
import { useForm } from 'react-hook-form';
import LoginPage from './Login';

export default function Cafe() {
    let herodata = [
        {
            subhead: 'Freshly brewed, always delivered with love!',
            head: 'Enjoy your favorite coffee, espresso, and pastries from the comfort of your home.',
            iconText: { icon: <PiPackageLight />, text: 'Handcrafted with Care' }
        },
        {
            subhead: 'Brewed to Perfection, Delivered to You!',
            head: 'We source the best ingredients to create the perfect blend for you.',
            iconText: { icon: <IoBagCheckOutline />, text: '100% secure checkout' }
        },
        {
            subhead: 'Seasonal treats, made with love.',
            head: 'Taste the season with our limited-time offers, only available this month!',
            iconText: { icon: <BsTruck />, text: 'No Shipping Charges' }
        }
    ];
    let DataTransfer = [
        {
            iconText: { icon: <PiPackageLight />, text: 'Handcrafted with Care' },
        },
        {
            iconText: { icon: <IoBagCheckOutline />, text: '100% Secure Checkout' },
        },
        {
            iconText: { icon: <BsTruck />, text: 'No Shipping Charges' },
        },
        // {iconText: { icon: <BsTruck />, text: 'Made With Love' }}
    ];
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <section className='hero'>
                <Row className='d-lg-flex d-none'>
                    <Col lg={6} className='d-md-flex px-lg-0 flex-column justify-content-center align-items-center secondary-bg-color-gradient'>
                        <div className='offset-md-2'>
                            <Carousel className='w-100 ps-lg-5 fs-6'>
                                {herodata.map((item, key) => (
                                    <Carousel.Item interval={1000} key={key} className="ps-lg-4 py-3">
                                        <p>"{item.subhead}"</p>
                                        <h3 className="mb-3 text-danger fw-bolder">{item.head}</h3>
                                        <span>{item.iconText.icon} {item.iconText.text}</span>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <div className='offset-md-4 w-100 px-5 d-flex flex-items-start'>
                            {/* <Button className="mt-2 fw-2 ms-4 rounded-1 text-light py-2 px-4" variant="dark">
                                Orders here!
                            </Button> */}
                        </div>
                    </Col>
                    <Col lg={6} className='px-lg-0'>
                        <Image className='img-fluid' src={Hero} />
                    </Col>
                </Row>
                <Row className='d-lg-none hero-bg-small p-3'>
                    <Col className='hero-bg-small-content col text-center'>
                        <div className='my-5'>
                            <Carousel className='fs-5'>
                                {herodata.map((item, key) => (
                                    <Carousel.Item interval={1000} key={key} className="hero-min-window">
                                        <p className="fs-6 text-white">{item.subhead}</p>
                                        <h3 className="mb-3 text-white fw-bolder">{item.head}</h3>
                                        <span className="fs-6 text-white">{item.iconText.icon} {item.iconText.text}</span>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <div className='mb-5'>
                            {/* <Button className="rounded-1" variant="danger">
                                Orders here!
                            </Button> */}
                        </div>
                    </Col>
                </Row>
            </section>
            <section className='services my-5'>
                <Container className='m-0 mx-auto'>
                    <Carousel fade className='d-lg-none px-4 my-5'>
                        {DataTransfer.map((item, key) => (
                            <Carousel.Item interval={2000} key={key} className="my-5">
                                <div className="py-lg-4 py-5 d-flex flex-column justify-content-evenly align-items-center secondary-bg-color rounded">
                                    <div className="border border-1 border-white bg-danger p-4 py-3 text-white rounded-circle fs-4">
                                        {item.iconText.icon}
                                    </div>
                                    <h6 className="mt-md-0 mt-5 fw-bold">{item.iconText.text}</h6>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Row className='d-lg-flex d-none py-5 justify-content-evenly'>
                        {DataTransfer.map((item, key) => (
                            <Col key={key} className={`my-lg-0 my-5 mx-lg-2 py-4 secondary-bg-color text-center rounded-2`} xs={12} sm={6} md={4} lg={3}>
                                <div className="py-lg-4 py-5 d-flex flex-column flex-sm-row justify-content-evenly align-items-center">
                                    <div className="border border-1 border-white bg-danger p-4 py-3 text-white rounded-circle fs-4">
                                        {item.iconText.icon}
                                    </div>
                                    <h6 className="mt-md-0 mt-5 fw-bold">{item.iconText.text}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section className='explore-section my-5 '>
                <Container className='mb-5'>
                    <Row className='bg-danger explore-section-tab'>
                        <Col md={6} className='explore-block secondary-bg-color animate__animated animate__fadeInDown p-3'>
                            <h1 className='text-transparent'>Explore <span className='d-inline-block mt-3 animate__animated animate__rotateIn animate__delay-2s 2s'>+</span></h1>
                            <Image className='w-100' src={Explore1} />
                            <p className='mt-2 animate__animated animate__fadeIn animate__delay-2s 2s'>
                                <h4 className=''><span className='border-bottom border-danger pe-3'>Heritage</span></h4>
                                <p>
                                    The Rich Heritage Behind Your Cup of Coffee

                                    Coffee isn’t just a drink; it’s a global heritage steeped in centuries of tradition, culture, and connection. Every cup of coffee we enjoy today carries with it a rich history of discovery, cultivation, and ritual that has shaped the world in profound ways.
                                </p>
                            </p>
                        </Col>
                        <Col md={6} className='bg-success'>
                            <Row className='explore-history-tab p-5 animate__animated animate__fadeInUp mt-md-0 mt-5'>
                                <div className="bg-light bg-opacity-50 p-5 d-flex justify-content-evenly">
                                    <div className="fs-3 me-2">
                                        <TbCloverFilled />
                                    </div>
                                    <h3 className="">History - Heritage - culture - Preserved with love</h3>
                                </div>
                            </Row>
                            <Row className='bg-dark mt-md-0 mt-5'>
                                <Col className="explore-merch-tab-one p-md-0 animate__animated animate__fadeInRight" lg={6}>
                                    <div className="bg-light bg-opacity-50 p-5 d-flex justify-content-evenly">
                                        <div className="fs-3 me-2">
                                            <TbHeartHandshake />
                                        </div>
                                        <h3 className="">Handcrafted with Care</h3>
                                    </div>
                                </Col>
                                <Col className="explore-merch-tab-two p-md-0 animate__animated animate__fadeInLeft" lg={6}>
                                    <div className="bg-light bg-opacity-50 p-5 d-flex justify-content-evenly">
                                        <div className="fs-3 me-2">
                                            <BsTruck />
                                        </div>
                                        <h3 className="">No Shipping Charges</h3>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='explore-store-tab p-5 animate__animated animate__fadeInUp mt-md-0 mt-5'>
                                <div className="bg-light bg-opacity-50 p-5 d-flex justify-content-evenly">
                                    <div className="fs-3 me-2">
                                        <FaStore />
                                    </div>
                                    <h3 className="">Come Checkout Our Store!</h3>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='about-contact my-5'>
                <Container >
                    <Row className='my-5 py-5'>
                        <Col className='about us p-5 bg-success-subtle' md={6}>
                            <h1 className='mb-md-0 mb-4'><span className='custom-font-two border-3 border-bottom border-danger pe-lg-5 animate__animated animate__fadeInRight'>Coffees & Pastries</span></h1>
                            <video className='img-fluid mt-3 animate__animated animate__fadeInLeft' src={AboutVdeo} autoPlay muted loop></video>
                            <div className='custom-font-two fs-2 text-danger text-center border-3 border-danger border-bottom'>...</div>
                        </Col>
                        <Col className='feedbacktab mt-md-0 mt-5 py-md-0 py-5 d-flex justify-content-center align-items-center'>
                            <div className='bg-light bg-opacity-75 rounded w-75 w-sm-100 p-4' md={6}>
                                {/* <h1 className=''><span className='custom-font-two border-3 border-bottom border-danger pe-5 animate__animated animate__fadeInRight'>Suggestions here</span></h1> */}
                                <div className='form-container'>
                                    <h4 className='mt-0 mb-5'>Suggestions here</h4>
                                    <Form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
                                        {/* Full Name Input */}
                                        <FloatingLabel controlId="floatingFullName" label="Full Name" className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your full name"
                                                {...register('fullName', { required: 'Name is required.' })}
                                                isInvalid={!!errors.fullName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.fullName?.message}
                                            </Form.Control.Feedback>
                                        </FloatingLabel>

                                        {/* Email Input */}
                                        <FloatingLabel controlId="floatingInputEmail" label="Email address" className="mb-3">
                                            <Form.Control
                                                type="email"
                                                placeholder="name@example.com"
                                                {...register('email', {
                                                    required: 'Email is required.',
                                                    pattern: {
                                                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                                        message: 'Invalid email address.'
                                                    }
                                                })}
                                                isInvalid={!!errors.email}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email?.message}
                                            </Form.Control.Feedback>
                                        </FloatingLabel>

                                        {/* City Input */}
                                        <FloatingLabel controlId="floatingCity" label="City" className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your city"
                                                {...register('city', { required: 'City is required.' })}
                                                isInvalid={!!errors.city}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.city?.message}
                                            </Form.Control.Feedback>
                                        </FloatingLabel>

                                        {/* Age Input */}
                                        <FloatingLabel controlId="floatingAge" label="Age" className="mb-3">
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter your age"
                                                {...register('age', {
                                                    required: 'Age is required.',
                                                    min: { value: 18, message: 'Age must be 18 or older.' }
                                                })}
                                                isInvalid={!!errors.age}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.age?.message}
                                            </Form.Control.Feedback>
                                        </FloatingLabel>

                                        {/* Suggestions Textarea */}
                                        <FloatingLabel controlId="floatingTextarea" label="Suggestions" className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                placeholder="Suggestions"
                                                {...register('textarea', { required: 'This field is required.' })}
                                                isInvalid={!!errors.textarea}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.textarea?.message}
                                            </Form.Control.Feedback>
                                        </FloatingLabel>

                                        {/* Submit Button */}
                                        <div className="mt-5 text-center">
                                            <Button variant="danger" type="submit" className="px-md-5">
                                                Submit
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                                {/* <div className='custom-font-two fs-2 text-danger text-center border-3 border-danger border-bottom'>...</div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};
