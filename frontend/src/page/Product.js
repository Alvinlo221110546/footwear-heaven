import React, { useState, useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import ScrollToTopButton from '../componen/ScrollToTopButton';
import { Card, Button, Modal } from 'react-bootstrap';
import axios from "axios"
import Form from 'react-bootstrap/Form';
import Keranjang from './Keranjang';
import { FaShoppingBag } from 'react-icons/fa';




function Product() {
    const handleNavLinkClick = (eventKey) => {
        const section = document.getElementById(eventKey);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const isLoggedIn = !!localStorage.getItem('user');
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [showKeranjang, setShowKeranjang] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isPaymentProcessed, setIsPaymentProcessed] = useState(false);
    const [priaData, setPriaData] = useState([]);
    const [wanitaData, setWanitaData] = useState([]);
    const [anakData, setAnakData] = useState([]);



    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleAddToCart = async (product) => {
        try {
            const { title, pricedescription, id } = product;
            const existingItem = cartItems.find((item) => item.id === id);

            if (existingItem) {
                const updatedCartItems = cartItems.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
                setCartItems(updatedCartItems);
            } else {
                const newItem = { id, title, pricedescription, quantity: 1 };
                setCartItems([...cartItems, newItem]);
            }

            await axios.post('http://localhost:3020/api/keranjang', {
                title,
                pricedescription,
                itemId: id,
            }, {
                withCredentials: false
            });

            const response = await axios.get('http://localhost:3020/api/keranjang', {
                params: { timestamp: new Date().getTime() },
                withCredentials: false
            });

            setCartItems(response.data);

            console.log('Cart items after update:', response.data);
        } catch (error) {
            console.error('Error adding item to cart:', error.message, error.config);
        }
    };

    const fetchData = async () => {
        try {
            const responsePria = await axios.get('http://localhost:3020/api/Pria');
            setPriaData(responsePria.data);

            const responseWanita = await axios.get('http://localhost:3020/api/Wanita');
            setWanitaData(responseWanita.data);

            const responseAnak = await axios.get('http://localhost:3020/api/Anak');
            setAnakData(responseAnak.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredPria = priaData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredWanita = wanitaData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredAnak = anakData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleShowKeranjang = () => {
        setShowKeranjang(true);
    };

    const handleCloseKeranjang = () => {
        setShowKeranjang(false);
    };

    const handleRemoveItem = (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
    };

    const handleBuyNow = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handlePayment = () => {
        setIsPaymentProcessed(true);
        setTimeout(() => {
            setIsPaymentProcessed(false);
            setShowModal(false);
        }, 1500);
    };


    return (
        <Container fluid>
            <Row className="justify-content-center ">
                <Nav className="justify-content-center " >
                    <Nav.Item>
                        <Nav.Link eventKey="pria" onClick={() => handleNavLinkClick('pria')} style={{ color: 'black', fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold' }}>
                            Pria
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Wanita" onClick={() => handleNavLinkClick('Wanita')} style={{ color: 'black', fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold' }}>
                            Wanita
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Anak-anak" onClick={() => handleNavLinkClick('Anak-anak')} style={{ color: 'black', fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold' }}>
                            Anak-anak
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ marginLeft: 'auto' }}>
                        <div style={{ marginTop: '8px' }} >
                            <Button variant='dark' style={{
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onClick={handleShowKeranjang}><FaShoppingBag /></Button>
                            <Keranjang
                                cartItems={cartItems}
                                show={showKeranjang}
                                onHide={handleCloseKeranjang}
                                onRemoveItem={handleRemoveItem}
                            />
                        </div>
                    </Nav.Item>
                </Nav>
            </Row>
            <Row className="justify-content-center my-4">
                <Form style={{ width: '1330px' }}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{ borderColor: 'black' }}
                    />
                </Form>
            </Row>
            <section id="pria" className='my-4'>
                <Container>
                    <h1>Section Pria</h1>
                    <p>Ini adalah bagian khusus untuk produk pria.</p>
                </Container>
                <Container className="mx-auto" >
                    <Row>
                        {filteredPria.map((product) => (
                            <Card key={product.id} style={{ width: '18rem', margin: '19px' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.pricedescription}</Card.Text>
                                    <div className='d-flex'>
                                        {isLoggedIn ? (
                                            <>
                                                <Button style={{ margin: '5px' }} variant="dark" onClick={() => handleBuyNow(product)}>Buy Now</Button>
                                                <Button style={{ margin: '5px' }} variant="success" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                            </>
                                        ) : (
                                            <p>Login untuk menambahkan ke keranjang atau beli sekarang.</p>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
            </section>
            <section id="Wanita" >
                <Container>
                    <h1>Section Wanita</h1>
                    <p>Ini adalah bagian khusus untuk produk Wanita.</p>
                </Container>
                <Container className="mx-auto" >
                    <Row>
                        {filteredWanita.map((product) => (
                            <Card key={product.id} style={{ width: '18rem', margin: '19px' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.pricedescription}</Card.Text>
                                    <div className='d-flex'>
                                        {isLoggedIn ? (
                                            <>
                                                <Button style={{ margin: '5px' }} variant="dark" onClick={() => handleBuyNow(product)}>Buy Now</Button>
                                                <Button style={{ margin: '5px' }} variant="success" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                            </>
                                        ) : (
                                            <p>Login untuk menambahkan ke keranjang atau beli sekarang.</p>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
            </section>
            <Row>
                <section id="Anak-anak">
                    <Container>
                        <h2>Section Anak-anak</h2>
                        <p>Ini adalah bagian khusus untuk produk Anak-anak.</p>
                    </Container>
                    <Container className="mx-auto" >
                        <Row>
                            {filteredAnak.map((product) => (
                                <Card key={product.id} style={{ width: '18rem', margin: '19px' }}>
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.pricedescription}</Card.Text>
                                        <div className='d-flex'>
                                        {isLoggedIn ? (
                                            <>
                                                <Button style={{ margin: '5px' }} variant="dark" onClick={() => handleBuyNow(product)}>Buy Now</Button>
                                                <Button style={{ margin: '5px' }} variant="success" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                            </>
                                        ) : (
                                            <p>Login untuk menambahkan ke keranjang atau beli sekarang.</p>
                                        )}
                                    </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Row>
                    </Container>
                </section>
            </Row>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header >
                    <Modal.Title>{selectedProduct?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img src={selectedProduct?.image} />
                    <p>{selectedProduct?.description}</p>
                    <p>{selectedProduct?.pricedescription}</p>
                </Modal.Body>
                <Modal.Footer>
                    {!isPaymentProcessed && (
                        <>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Tutup
                            </Button>
                            <Button variant="primary" onClick={handlePayment}>
                                Bayar
                            </Button>
                        </>
                    )}
                    {isPaymentProcessed && <p>Pembayaran diproses...</p>}
                </Modal.Footer>
            </Modal>
            <ScrollToTopButton />
        </Container>
    );
}

export default Product;
