import { Button, Card, Offcanvas, Row, Col, Form, FloatingLabel, Image } from 'react-bootstrap';
import { CartContext } from '../../context/cart';
import { useContext, useState } from 'react';
import NoItemsInTheCartImg from '../../assets/shopping-carts-facing-each-other.jpg';
// import { FloatingLabel, Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Cart() {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getCartTotalQuantity, showModal, toggle } = useContext(CartContext);

    const [showCheckout, setShowCheckout] = useState(false);

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    const handleGoBackToCart = () => {
        setShowCheckout(false);
    };

    // Initialize react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data);  // Handle form submission (e.g., make API call)
    };

    // Cart Items Component
    const cartItemsSection = (
        <>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Your Cart Items: &nbsp;<span>{getCartTotalQuantity()}</span></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column bg-success bg-gradient bg-opacity-50">
                {/* Cart Items List */}
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map((item) => (
                            <Card key={item.id} className="mb-3">
                                <Card.Img variant="bottom" src={item.image_url} alt={item.name} />
                                <Card.Body className="bg-secondary bg-gradient bg-opacity-25 text-center">
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description.slice(0, 40)}...</Card.Text>
                                    <Card.Text>${item.price}</Card.Text>
                                    <div className="d-flex justify-content-evenly align-items-center p-2">
                                        <Button
                                            variant="dark"
                                            size="md"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            -
                                        </Button>
                                        <p className="my-auto">{item.quantity}</p>
                                        <Button
                                            variant="dark"
                                            size="md"
                                            onClick={() => addToCart(item)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </>
                ) : (
                    <Card className="my-5">
                        <Card.Img variant="bottom" src={NoItemsInTheCartImg} alt="no items in the cart" />
                        <Card.Body className="bg-secondary bg-gradient bg-opacity-25 text-center">
                            <Card.Title>Your cart is empty</Card.Title>
                        </Card.Body>
                    </Card>
                )}

                {/* Conditionally Render Total and Clear Cart only if Cart has items */}
                {cartItems.length > 0 && (
                    <div className="mt-auto d-flex flex-column align-items-center mt-4 secondary-bg-color p-2 rounded mt-5">
                        <h4 className="fw-bold w-100 p-3 bg-light rounded text-center">Total: ${getCartTotal()}</h4>
                        <div className='w-100 mt-2 d-flex justify-content-between'>
                            <Button
                                variant="danger-outline"
                                size="sm"
                                onClick={clearCart}
                                className='p-2 px-3'
                            >
                                Clear Cart
                            </Button>

                            <Button
                                variant="dark"
                                size="sm"
                                className='me-2 p-2 px-3'
                                onClick={handleCheckout}
                            >
                                Checkout
                            </Button>
                        </div>
                    </div>
                )}
            </Offcanvas.Body>
        </>
    );

    // Checkout Section Component
    const checkoutSection = (
        <>
            <Offcanvas.Header closeButton>
                <Button
                    variant="danger"
                    onClick={handleGoBackToCart}
                    size='sm'
                    className='fw-bold px-2'
                >
                    <span>Back to Cart</span>
                </Button>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column bg-success bg-gradient bg-opacity-50">
                {/* Right Column (Form) */}
                <div className="p-4 bg-light bg-opacity-25 rounded">
                    <h5 className='mb-3'>Shipment Details</h5>
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
                        {cartItems.length > 0 && (
                            <div className="mt-5">
                                {/* Card Container */}
                                <Card className="w-100 shadow-sm">
                                    <Card.Header>
                                        {/* Card Title */}
                                        <Card.Title className="text-center">Order Summary</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        {/* Table for displaying the cart summary */}
                                        <table className="w-100">
                                            <tbody>
                                                {/* Subtotal */}
                                                <tr>
                                                    <td>Subtotal</td>
                                                    <td>${getCartTotal()}</td>
                                                </tr>

                                                {/* Shipping Charges (Static in this case, can be dynamic) */}
                                                <tr>
                                                    <td>Shipping Charges</td>
                                                    <td>$5.00</td>
                                                </tr>

                                                {/* Total */}
                                                <tr>
                                                    <td className="fw-bold">Total</td>
                                                    <td className="fw-bold">${(getCartTotal() + 5.00).toFixed(2)}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* Action Buttons */}
                                        <div className="w-100 mt-4 d-flex justify-content-between">
                                            {/* Cancel Button: Goes back to the cart */}
                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={handleGoBackToCart}
                                                className="p-2 px-3"
                                            >
                                                Cancel
                                            </Button>

                                            {/* Pay Now Button: Triggers the checkout */}
                                            <Button
                                                variant="dark"
                                                size="sm"
                                                className="me-2 p-2 px-3 fw-bold"
                                                onClick={handleCheckout}
                                            >
                                                Pay Now
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )}
                    </Form>
                </div>
            </Offcanvas.Body>
        </>
    );

    return (
        showModal && (
            <Offcanvas placement="end" show={showModal} onHide={toggle} backdrop="static">
                {showCheckout ? checkoutSection : cartItemsSection}
            </Offcanvas>
        )
    );
}



