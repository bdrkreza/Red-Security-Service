import React from 'react';
import './AboutUs.css'
import aboutLogo from '../../../../Image/about.jpg'
import approveLogo from '../../../../Icon/approved.png'
import warningLogo from '../../../../Icon/medal.png'

const AboutUs = () => {
    return (
        <div class="container-fluid card mb-5 py-5">
            <div class="row align-items-center">
                <div class="col-lg-6 px-0">
                    <img class="img-fluid w-75 offset-1" src={aboutLogo} alt="Img" />
                </div>
                <div class="col-lg-6 py-5 py-lg-0 px-3 px-lg-5">
                    <h5 class="text-primary mb-3">About Us</h5>
                    <h1 class="mb-4">15 Years Experience</h1>
                    <p>Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</p>
                    <div class="row py-2">
                        <div class="col-sm-6">
                            <img class='logo' src={approveLogo} alt="" />
                            <h5 class="mt-2">Govt Approved</h5>
                            <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                        </div>
                        <div class="col-sm-6">
                            <img class='logo' src={warningLogo} alt="" />
                            <h5 class="mt-2">Award Winning</h5>
                            <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                        </div>
                    </div>
                    <a href="/" class="btn px-4 btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;