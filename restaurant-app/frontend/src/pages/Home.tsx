import React from 'react';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to Our South Indian Restaurant</h1>
            <p>Explore our delicious menu below:</p>
            <Menu />
        </div>
    );
};

export default Home;