import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div class="container-fluid bg-primary my-5 py-5 text-center">
                <h1 class="text-white font-weight-bold mt-5 mb-3">Subscribe Our Newsletter</h1>
                <p class="text-white mb-4">Subscribe and get Our latest article in your inbox</p>
                <form class="form-inline justify-content-center mb-5">
                    <div class="input-group">
                        <input type="text" class="form-control-lg" placeholder="Your Email" />
                        <div class="input-group-append">
                            <button class="btn btn-secondary" type="submit">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;