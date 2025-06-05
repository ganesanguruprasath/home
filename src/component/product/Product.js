import { useState, useEffect, useContext } from 'react';
import { Button, Container, Row, Col, Carousel, Image, Form, Card } from 'react-bootstrap';
import { CartContext } from '../../context/cart.js';
import Cart from '../cart/Cart.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import placeholderImage from '../../assets/no-image.jpg';

export default function Products() {
    // const [showModal, setshowModal] = useState(false);
    const [products, setProducts] = useState([])
    const { cartItems, addToCart, removeFromCart, showModal, toggle } = useContext(CartContext)


    async function getProducts() {
        try {
            const response = await axios.get('https://fake-coffee-brand-api.vercel.app/api');
            setProducts(response.data);
            // console.log(response.data);
        } catch (error) {
            // console.error("Error fetching products:", error);
            try {
                const fallbackResponse = await axios.get('https://fake-coffee-brand-api.vercel.app/api');
                setProducts(fallbackResponse.data);
            } catch (fallbackError) {
                console.error("Both API calls failed:", fallbackError);
            }
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const notifyAddedToCart = (item) => toast.success(`${item.title} added to cart!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        style: {
            backgroundColor: '#fff',
            color: '#000',
        }
    });

    const notifyRemovedFromCart = (item) => toast.error(`${item.title} removed from cart!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        style: {
            backgroundColor: '#000',
            color: '#fff',
        }
    });

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
        notifyRemovedFromCart(product);
    };

    return (
        <>
            {/* Product Listings */}
            <Row className="d-flex justify-content-start">
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="shadow-sm rounded-lg">
                            <Card.Img
                                variant="top"
                                src={product.image_url || placeholderImage}
                                alt={product.name || "No name available"}
                                className="rounded-top h-48"
                            />
                            <Card.Body>
                                <Card.Title className="text-lg font-weight-bold">
                                    {product.name || "Unnamed Product"}
                                </Card.Title>
                                <Card.Text className="text-muted">
                                    {product.description ? `${product.description.slice(0, 40)}...` : "No description available"}
                                </Card.Text>
                                {
                                    product.price !== undefined ? (
                                        <Card.Text className="font-weight-bold">${product.price}</Card.Text>
                                    ) : null
                                }
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between align-items-center text-center">
                                {
                                    !cartItems.find(item => item.id === product.id) ? (
                                        <Col>
                                            <Button
                                                variant="dark"
                                                size="md"
                                                onClick={() => {
                                                    addToCart(product);
                                                    notifyAddedToCart(product);
                                                }}
                                            >
                                                Add to cart
                                            </Button>
                                        </Col>
                                    ) : (
                                        <Col className="d-flex justify-content-evenly align-items-center">
                                            <Button
                                                variant="dark"
                                                size="md"
                                                onClick={() => {
                                                    const cartItem = cartItems.find(item => item.id === product.id);
                                                    if (cartItem.quantity === 1) {
                                                        handleRemoveFromCart(product);
                                                    } else {
                                                        removeFromCart(product);
                                                    }
                                                }}
                                            >
                                                -
                                            </Button>
                                            <p className="my-auto">{cartItems.find(item => item.id === product.id).quantity}</p>
                                            <Button
                                                variant="dark"
                                                size="md"
                                                onClick={() => addToCart(product)}
                                            >
                                                +
                                            </Button>
                                        </Col>
                                    )
                                }
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* Cart Modal */}
            <Cart showModal={showModal} toggle={toggle} />
        </>
    )
}
