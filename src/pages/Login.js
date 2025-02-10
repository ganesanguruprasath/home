import { FloatingLabel, Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import LoginImg from '../assets/imad-786-cuFQNZXdQ8g-unsplash.jpg';
import { Link } from 'react-router';  // Correct import for routing
import { BsTypeH4 } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

export default function Login() {
    // Initialize react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data);  // Handle form submission (e.g., make API call)
    };

    return (
        <>
            <section className='p-5 bg-warning-subtle bg-gradient d-flex justify-content-center align-items-center'>
                <Row className='d-none d-lg-flex w-50 bg-white rounded border-5'>
                    <Col md={6} className="p-5 bg-success-subtle d-none d-md-block">
                        <h4 className="">
                            <span className="custom-font-two border-3 border-bottom border-danger pe-lg-5 animate__animated animate__fadeInRight">
                                LOGIN
                            </span>
                        </h4>
                        <Image src={LoginImg} className='img-fluid' />
                        <div className="custom-font-two fs-2 text-danger text-center border-3 border-danger border-bottom">...</div>
                    </Col>

                    <Col md={6} className="p-5 text-center">
                        <h4 className="d-md-none mb-5">
                            <span className="custom-font-two border-3 border-bottom border-danger pe-lg-5 animate__animated animate__fadeInRight">
                                LOGIN
                            </span>
                        </h4>
                        <Form onSubmit={handleSubmit(onSubmit)}>
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

                            {/* Password Input */}
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters'
                                        }
                                    })}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* Submit Button */}
                            <Button type="submit" variant="dark" className="w-100 mt-5">
                                Login
                            </Button>

                            <Link to="/register" className="d-block mt-3 text-center">
                                Don't have an account? Create an account
                            </Link>
                        </Form>
                    </Col>
                </Row>
                {/* smaller screen */}
                <Row className='d-lg-none d-flex w-100 bg-white rounded border-5'>
                    <Col md={6} className="p-5 bg-success-subtle d-none d-md-block">
                        <h4 className="">
                            <span className="custom-font-two border-3 border-bottom border-danger pe-lg-5 animate__animated animate__fadeInRight">
                                LOGIN
                            </span>
                        </h4>
                        <Image src={LoginImg} className='img-fluid' />
                        <div className="custom-font-two fs-2 text-danger text-center border-3 border-danger border-bottom">...</div>
                    </Col>

                    <Col md={6} className="p-5 text-center">
                        <h4 className="d-md-none mb-5">
                            <span className="custom-font-two border-3 border-bottom border-danger pe-lg-5 animate__animated animate__fadeInRight">
                                LOGIN
                            </span>
                        </h4>
                        <Form onSubmit={handleSubmit(onSubmit)}>
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

                            {/* Password Input */}
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters'
                                        }
                                    })}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            {/* Submit Button */}
                            <Button type="submit" variant="dark" className="w-100 mt-5">
                                Login
                            </Button>

                            <Link to="/register" className="d-block mt-3 text-center">
                                Don't have an account? Create an account
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </section>
        </>
    );
}
