import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { blogData } from '../../../../FakeData/FakeData';
import Footer from '../../../Footer/Footer/Footer';
import Navbar from '../../../Header/Navbar/Navbar';
import BlogCard from '../BlogCard/BlogCard';


const Blog = () => {
    const [loading, setLoading] = useState(null)
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(data);
            })

    }, [])
    return (
        <div>
            <Navbar />
            <div className="container mt-lg-5 pt-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h5 className="text-primary mb-3">Recent Blog</h5>
                    <h1 className="m-0">Latest From Our Blog</h1>
                </div>
                <div className="row pb-3">

                    {
                        blogs?.map(data => <BlogCard blogData={data} />)
                    }

                    <div className="col-lg-12">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center mb-4">
                                <li className="page-item disabled">
                                    <a className="page-link" href="/" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                <li className="page-item"><a className="page-link" href="/">2</a></li>
                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;