import React from 'react';
import { blogData } from '../../../../FakeData/FakeData';
import BlogCard from '../BlogCard/BlogCard';


const Blog = () => {
    return (
        <div>
            <div class="container pt-5">
                <div class="d-flex flex-column text-center mb-5">
                    <h5 class="text-primary mb-3">Recent Blog</h5>
                    <h1 class="m-0">Latest From Our Blog</h1>
                </div>
                <div class="row pb-3">

                    {
                        blogData.map(data => <BlogCard blogData={data} />)
                    }

                    <div class="col-lg-12">
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-center mb-4">
                                <li class="page-item disabled">
                                    <a class="page-link" href="/" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="/">1</a></li>
                                <li class="page-item"><a class="page-link" href="/">2</a></li>
                                <li class="page-item"><a class="page-link" href="/">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="/" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;