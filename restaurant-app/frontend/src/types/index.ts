export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface CartItem {
    menuItem: MenuItem;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalAmount: number;
}