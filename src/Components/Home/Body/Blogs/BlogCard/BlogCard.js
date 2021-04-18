import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const style = {
    width: "55px",
    height: '45px'
};

const BlogCard = ({ blogData }) => {
    const { img, description, name } = blogData;
    return (
        <>
            <div class="col-lg-4 mb-4">
                <div class="card mb-2">
                    <img class="card-img-top" src={img} alt="" />
                    <div class="card-body bg-dark d-flex align-items-center p-1">
                        <h6 class="card-title text-white text-truncate m-0 ml-3">{name}</h6>
                        <a href="/" style={style} class="d-flex flex-shrink-0 align-items-center justify-content-center bg-danger text-white text-decoration-none m-0 ml-auto" ><FontAwesomeIcon size="2x" icon={faLink} /></a>
                    </div>
                    <div class="card-footer py-3 px-4">
                        <div class="d-flex mb-2">
                            <small class="mr-3"><i class="fa fa-user text-primary"></i> Admin</small>
                            <small class="mr-3"><i class="fa fa-folder text-primary"></i> Web Design</small>
                            <small class="mr-3"><i class="fa fa-comments text-primary"></i> 15</small>
                        </div>
                        <p class="m-0">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;