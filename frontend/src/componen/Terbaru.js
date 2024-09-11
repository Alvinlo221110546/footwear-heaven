import React, { useState, useEffect } from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Terbaru() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAnak = await axios.get('http://localhost:3020/api/Terbarus');
        setProducts(responseAnak.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const carouselItems = [];

  for (let i = 0; i < totalSlides; i++) {
    const startIndex = i * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    const slideProducts = products.slice(startIndex, endIndex);

    const carouselItem = (
      <Carousel.Item key={i} className='my-4'>
        <Row>
          {slideProducts.map((product) => (
            <Col key={product.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.pricedescription}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );

    carouselItems.push(carouselItem);
  }

  return <Carousel>{carouselItems}</Carousel>;
}

export default Terbaru;
