import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const style = {
    width: "55px",
    height: '45px'
};

const BlogCard = ({ blogData }) => {
    const { name, description, admin } = blogData.blog;
    console.log(blogData)
    return (
        <>
            <div className="col-lg-4 mb-4">
                <div className="card mb-2">
                    <img className="card-img-top" src={`data:image/png;base64,${blogData.image?.img}`} alt="" />
                    <div className="card-body bg-dark d-flex align-items-center p-1">
                        <h6 className="card-title text-white text-truncate m-0 ml-3">{name}</h6>
                        <a href="/" style={style} className="d-flex flex-shrink-0 align-items-center justify-content-center bg-danger text-white text-decoration-none m-0 ml-auto" ><FontAwesomeIcon size="2x" icon={faLink} /></a>
                    </div>
                    <div className="card-footer py-3 px-4">
                        <div className="d-flex mb-2">
                            <small className="mr-3"><i className="fa fa-user text-primary"></i>{admin}</small>
                            <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                            <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                        </div>
                        <p className="m-0">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;