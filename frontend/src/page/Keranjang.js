import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Keranjang({ show, onHide }) {
  const [cartItems, setCartItems] = useState([]);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3020/api/keranjang', {
                params: { timestamp: new Date().getTime() },
                withCredentials: false
            });

            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };
    const intervalId = setInterval(() => {
        fetchData();
    }, 1000);
    return () => clearInterval(intervalId);
}, []); 


  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:3020/api/keranjang',{ params: { timestamp: new Date().getTime() },withCredentials:false});
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const cleanedPrice = item.pricedescription.replace(/[^\d,]/g, '');
      const price = parseFloat(cleanedPrice.replace(',', '.'));
      if (isNaN(price)) {
        console.log('Invalid price for item:', item);
      }

      total += price * item.quantity;
    });
    return total.toLocaleString('id-ID');
  };

  const handleRemoveFromCart = async (item) => {
    try {
      if (item.quantity > 1) {
        await axios.put(`http://localhost:3020/api/keranjang/${item.itemId}`, { quantity: item.quantity - 1 }, {
          withCredentials: false,
        });
      } else {
        await axios.delete(`http://localhost:3020/api/keranjang/${item.itemId}`, {
          withCredentials: false,
        });
      }
      const response = await axios.get('http://localhost:3020/api/keranjang',{
        withCredentials: false,
        params: { timestamp: new Date().getTime() }
      });
      setCartItems(response.data);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  

  const handleCheckout = async () => {
    setIsProcessingPayment(true);
  
    try {
      await axios.delete('http://localhost:3020/api/keranjang', {
        withCredentials: false,
      });    
      const response = await axios.get('http://localhost:3020/api/keranjang', {
        withCredentials: false,
        params: { timestamp: new Date().getTime() },
      });
      setCartItems(response.data);
  
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsProcessingPayment(false);
      onHide();
    } catch (error) {
      console.error('Error handling checkout:', error);
      setIsProcessingPayment(false);
    }
  };
  

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>
          <h1>Keranjang</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          <div>
            <h2>Daftar Produk di Keranjang:</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.itemId} className="d-flex justify-content-between my-4">
                  {item.title} - {item.pricedescription} x {item.quantity} {/* Menampilkan jumlah item */}
                  <Button variant="danger" onClick={() => handleRemoveFromCart(item)}>
                    Hapus
                  </Button>
                </li>
              ))}
            </ul>
            <h3>Total Harga: Rp {calculateTotalPrice()}</h3>
          </div>
        ) : (
          <p>Keranjang kosong</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Tutup
        </Button>
        {!isProcessingPayment ? (
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        ) : (
          <Button variant="primary" disabled>
            Memproses Pembayaran...
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Keranjang;
