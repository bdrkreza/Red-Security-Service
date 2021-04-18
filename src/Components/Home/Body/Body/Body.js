import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Blog from '../Blogs/Blog/Blog';
import Facts from '../Facts/Facts';
import Feature from '../Feature/Feature/Feature';

import Guard from '../Guard/Guard/Guard';
import OurService from '../OurService/OurService/OurService';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial/Testimonial';

const Body = () => {
    return (
        <div>
            <AboutUs />
            <OurService />
            <Facts />
            <Feature />
            <Subscribe />
            <Guard />
            <Testimonial />
            <Blog />
        </div>
    );
};

export default Body;