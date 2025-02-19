import { FloatingLabel, Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import RegisterImg from '../assets/imad-786-cuFQNZXdQ8g-unsplash.jpg'; // You can change the image as needed
import { Link } from 'react-router-dom';  // Correct import for routing
import { BsTypeH4 } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

export default function Register() {
    // Initialize react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data);  // Handle form submission (e.g., make API call)
    };

    return (
        <>
            <section className='p-5 bg-info-subtle bg-gradient d-flex justify-content-center align-items-center'>
                <Row className='d-none d-lg-flex w-50 bg-white rounded border-5'>
                    {/* Left Column (Image and Heading for larger screens) */}
                    <Col md={6} className="p-5 bg-primary-subtle d-none d-md-block">
                        <h4 className="">
                            <span className="custom-font-two border-3 border-bottom border-danger pe-lg-5 animate__animated animate__fadeInRight">
                                REGISTER
                            </span>
                        </h4>
                        <Image src={RegisterImg} className='img-fluid' />
                        <div className="custom-font-two fs-2 text-danger text-center border-3 border-danger border-bottom">...</div>
                    </Col>

                    {/* Right Column (Form) */}
                    <Col md={6} className="p-5 text-center">
                        <h4 className="d-md-none mb-5">
                            <span className="custom-font-two border-3 border-bottom border-danger pe-lg-5 animate__animated animate__fadeInRight">
                                REGISTER
                            </span>
                        </h4>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            {/* Full Name Input */}
                            <FloatingLabel controlId="floatingFullName" label="Full Name" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Full Name"
                                    {...register('fullName', {
                                        required: 'Full Name is required',
                                        maxLength: {
                                            value: 50,
                                            message: 'Full Name must be less than 50 characters'
                                        }
                                    })}
                                    isInvalid={!!errors.fullName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.fullName?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* Email Input */}
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                            message: 'Invalid email format'
                                        }
                                    })}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* Phone Input */}
                            <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Phone"
                                    {...register('phone', {
                                        required: 'Phone is required',
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: 'Phone number must be 10 digits'
                                        }
                                    })}
                                    isInvalid={!!errors.phone}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* City Input */}
                            <FloatingLabel controlId="floatingCity" label="City" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    {...register('city', {
                                        required: 'City is required'
                                    })}
                                    isInvalid={!!errors.city}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.city?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* Postal Code Input */}
                            <FloatingLabel controlId="floatingPostalCode" label="Postal Code" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Postal Code"
                                    {...register('postalCode', {
                                        required: 'Postal Code is required',
                                        pattern: {
                                            value: /^[A-Za-z0-9]{5,7}$/,
                                            message: 'Postal Code must be valid'
                                        }
                                    })}
                                    isInvalid={!!errors.postalCode}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.postalCode?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* Submit Button */}
                            <Button type="submit" variant="dark" className="w-100 mt-5">
                                Register
                            </Button>

                            <Link to="/login" className="d-block mt-3 text-center">
                                Already have an account? Login
                            </Link>
                        </Form>
                    </Col>
                </Row>
                {/* smaller screen */}
                <Row className='d-lg-none d-flex w-100 bg-white rounded border-5'>
                    {/* Left Column (Image and Heading for larger screens) */}
                    <Col md={6} className="p-5 bg-primary-subtle d-none d-md-block">
                        <h4 className="">
                            <span className="custom-font-two border-3 border-bottom border-danger pe-lg-5 animate__animated animate__fadeInRight">
                                REGISTER
                            </span>
                        </h4>
                        <Image src={RegisterImg} className='img-fluid' />
                        <div className="custom-font-two fs-2 text-danger text-center border-3 border-danger border-bottom">...</div>
                    </Col>

                    {/* Right Column (Form) */}
                    <Col md={6} className="p-5 text-center">
                        <h4 className="d-md-none mb-5">
                            <span className="custom-font-two border-3 border-bottom border-danger pe-lg-5 animate__animated animate__fadeInRight">
                                REGISTER
                            </span>
                        </h4>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            {/* Full Name Input */}
                            <FloatingLabel controlId="floatingFullName" label="Full Name" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Full Name"
                                    {...register('fullName', {
                                        required: 'Full Name is required',
                                        maxLength: {
                                            value: 50,
                                            message: 'Full Name must be less than 50 characters'
                                        }
                                    })}
                                    isInvalid={!!errors.fullName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.fullName?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* Email Input */}
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                            message: 'Invalid email format'
                                        }
                                    })}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* Phone Input */}
                            <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Phone"
                                    {...register('phone', {
                                        required: 'Phone is required',
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: 'Phone number must be 10 digits'
                                        }
                                    })}
                                    isInvalid={!!errors.phone}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* City Input */}
                            <FloatingLabel controlId="floatingCity" label="City" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    {...register('city', {
                                        required: 'City is required'
                                    })}
                                    isInvalid={!!errors.city}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.city?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* Postal Code Input */}
                            <FloatingLabel controlId="floatingPostalCode" label="Postal Code" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Postal Code"
                                    {...register('postalCode', {
                                        required: 'Postal Code is required',
                                        pattern: {
                                            value: /^[A-Za-z0-9]{5,7}$/,
                                            message: 'Postal Code must be valid'
                                        }
                                    })}
                                    isInvalid={!!errors.postalCode}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.postalCode?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* Submit Button */}
                            <Button type="submit" variant="dark" className="w-100 mt-5">
                                Register
                            </Button>

                            <Link to="/login" className="d-block mt-3 text-center">
                                Already have an account? Login
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </section>
        </>
    );
}
