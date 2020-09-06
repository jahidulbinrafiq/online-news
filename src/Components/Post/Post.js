import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title,id}=props.post
    return (
        <div style={{border:'1px solid lightgray'}}> 
            {title}
            <Link to ={`/posts/${id}`}>
                <button>See More</button>
            </Link>
            
        </div>
    );
};

export default Post;