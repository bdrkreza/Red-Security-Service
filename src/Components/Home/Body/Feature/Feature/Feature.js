import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import featureLogo from '../../../../../Image/feature.jpg'
import { featureData } from '../../../../FakeData/FakeData';


const Feature = () => {
    return (
        <div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-5 card-block mb-5">
                        <h5 className="text-primary mb-3">Why Choose Us?</h5>
                        <h1 className="mb-4">Top Level Security</h1>
                        <img className="img-thumbnail mb-4  p-2" src={featureLogo} alt="Img" />
                        <p >
                            Ea tempor ipsum kasd clita. Sea diam amet et rebum sit stet, vero sea est diam et sit ea sit et ea no
                         </p>
                        <a href="/" className="btn btn-lg btn-primary mt-5">Learn More</a>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            {
                                featureData.map(data => <FeatureCard featureData={data} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;