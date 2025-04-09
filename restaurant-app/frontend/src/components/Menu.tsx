import React from 'react';
import MenuItem from './MenuItem';

interface MenuProps {
    items: Array<{
        id: number;
        name: string;
        description: string;
        price: number;
    }>;
}

const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
        <div className="menu">
            <h2>South Indian Menu</h2>
            <ul>
                {items.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default Menu;