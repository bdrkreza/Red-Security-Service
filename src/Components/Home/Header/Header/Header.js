import React from 'react';
import './Header.css'
import carousel1 from '../../../../Image/carousel-1.jpg'
import carousel2 from '../../../../Image/carousel-2.jpg'
import HeaderCard from '../HeaderCard/HeaderCard';
import { infoData } from '../../../FakeData/FakeData';

const Header = () => {
    return (
        <header class="header-body">
            <div class="container-fluid p-0">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src={carousel2} alt="Img" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h4 class="text-primary m-0">Your Safety, Our Efforts</h4>
                                <h4 class="display-4 m-0 mt-2 mt-md-3 text-white">Best Security Service</h4>
                                <a href="/" class="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Learn More</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src={carousel1} alt="Img" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h4 class="text-primary m-0">Your Safety, Our Efforts</h4>
                                <h4 class="display-4 m-0 mt-2 mt-md-3 text-white">Highly Trained Guards</h4>
                                <a href="/" class="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="d-flex">
                {
                    infoData.map(data => <HeaderCard data={data} />)
                }
            </div>
        </header>
    );
};

export default Header;