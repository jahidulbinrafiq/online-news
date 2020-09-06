import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './Post.css';

const Post = (props) => {
    const {title,id,body}=props.post;
    const result=body.slice(0,20);

    return (
        <>
         <Container fixed>
         <div className='half-width'>
            <h6>{title}</h6>
            <p>{result}....</p>
            <Link to ={`/posts/${id}`}>
                <button className="btnStyle btn btn-outline-primary">See Mores➡</button>
            </Link>
            </div>
        </Container>
        
        </>
    );
};

export default Post;