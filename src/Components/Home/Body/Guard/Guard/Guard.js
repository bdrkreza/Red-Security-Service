import React from 'react';
import { guardData } from '../../../../FakeData/FakeData';
import GuardCard from '../GuardCard/GuardCard';

const Guard = () => {
    return (
        <div>
            <div class="container pt-5 pb-3">
                <div class="d-flex flex-column text-center mb-5">
                    <h5 class="text-primary mb-3">Security Officers</h5>
                    <h1 class="m-0">Meet Our Security Officers</h1>
                </div>
                <div class="row">

                    {
                        guardData.map(data => <GuardCard teamData={data} />)
                    }



                </div>
            </div>
        </div>
    );
};

export default Guard;