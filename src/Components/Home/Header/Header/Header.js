import React from 'react';
import './Header.css'
import carousel1 from '../../../../Image/carousel-1.jpg'
import carousel2 from '../../../../Image/carousel-2.jpg'
import HeaderCard from '../HeaderCard/HeaderCard';
import { infoData } from '../../../FakeData/FakeData';

const Header = () => {
    return (
        <header className="header-body">
            <div className="container-fluid p-0">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={carousel2} alt="Img" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h4 className="text-primary m-0">Your Safety, Our Efforts</h4>
                                <h4 className="display-4 m-0 mt-2 mt-md-3 text-white">Best Security Service</h4>
                                <a href="/" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Learn More</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={carousel1} alt="Img" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h4 className="text-primary m-0">Your Safety, Our Efforts</h4>
                                <h4 className="display-4 m-0 mt-2 mt-md-3 text-white">Highly Trained Guards</h4>
                                <a href="/" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="row">
                {
                    infoData.map(data => <HeaderCard data={data} />)
                }
            </div>
        </header>
    );
};

export default Header;