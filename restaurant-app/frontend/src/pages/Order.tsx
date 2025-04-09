import React from 'react';
import { useCart } from '../hooks/useCart'; // Assuming you have a custom hook for cart management
import Cart from '../components/Cart';

const Order: React.FC = () => {
    const { cartItems, totalAmount } = useCart();

    return (
        <div>
            <h1>Your Order</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <Cart items={cartItems} />
                    <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
                    <button onClick={() => alert('Proceeding to checkout...')}>Checkout</button>
                </>
            )}
        </div>
    );
};

export default Order;