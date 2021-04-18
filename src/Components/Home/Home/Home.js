import React from 'react';
import Body from '../Body/Body/Body';
import Footer from '../Footer/Footer/Footer';
import Header from '../Header/Header/Header';

import Navbar from '../Header/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default Home;