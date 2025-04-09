import React from 'react';

interface MenuItemProps {
    id: number;
    name: string;
    description: string;
    price: number;
    onAddToCart: (item: { id: number; name: string; price: number }) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, name, description, price, onAddToCart }) => {
    const handleAddToCart = () => {
        onAddToCart({ id, name, price });
    };

    return (
        <div className="menu-item">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default MenuItem;